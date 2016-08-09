import * as types from '../actions/actionTypes';
import { delay, takeEvery } from 'redux-saga'
import { call, put, take, cancelled, race } from 'redux-saga/effects'
import GLOBALS from '../globals';


function* performDelete(id) {
  try {
    yield call(delay, 8000);

    //todo: add another action when the times to delete
    // passes, so that we can safely call DELETE on our API
    yield call(fetch, `${GLOBALS.api_path}/bookmarks/${id}`, {method: 'DELETE', credentials: 'include'} );

    yield put({type: types.DELETE_BOOKMARK_SUCCESS, id});
  } catch(error) {
    yield put({type: types.DELETE_BOOKMARK_ERROR, error});
  }
}


function* deleteBookmark(act) {

  const { id } = act;
  yield put({type: types.REMOVE_BOOKMARK_FROM_UI, id});
  yield put({type: types.SHOW_UNDO, id});

  const { response, cancelDeleting } = yield race({
    delete: call(performDelete, id),
    cancelDeleting: take((action) => { return (action.type === types.DELETE_BOOKMARK_ERROR
      || action.type === types.CANCEL_DELETE_BOOKMARK)
      && action.id === id })
  });

  if (cancelDeleting) {
    yield put({type: types.READD_BOOKMARK_TO_UI, id});
  }
  yield put({type: types.HIDE_UNDO, id});

}


export default function* rootSaga() {
  yield* takeEvery(types.DELETE_BOOKMARK, deleteBookmark)
}
