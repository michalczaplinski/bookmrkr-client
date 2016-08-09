import * as types from '../actions/actionTypes';
import { delay, takeEvery, takeLatest } from 'redux-saga'
import { call, put, take, fork, cancel, cancelled, spawn, actionChannel } from 'redux-saga/effects'
import GLOBALS from '../globals';


function* performDelete(id) {
  try {
    yield call(delay, 5000);

    //todo: add another action when the times to delete
    // passes, so that we can safely call DELETE on our API
    yield call(fetch, `${GLOBALS.api_path}/bookmarks/${id}`, {method: 'DELETE', credentials: 'include'} );

    yield put({type: types.DELETE_BOOKMARK_SUCCESS, id});
  } catch(error) {
    yield put({type: types.DELETE_BOOKMARK_ERROR, error});
  } finally {
    if (yield cancelled() ) {
      yield put({type: 'CANCEL_DONE'})
    }
  }
}


function* deleteBookmark(act) {

  try {
    const { id } = act;
    const cancelDone = yield actionChannel('CANCEL_DONE');

    yield put({type: types.REMOVE_BOOKMARK_FROM_UI, id});
    yield put({type: types.SHOW_UNDO, id});

    const task = yield fork(performDelete, id);

    const action = yield take([types.CANCEL_DELETE_BOOKMARK, types.DELETE_BOOKMARK_ERROR, types.DELETE_BOOKMARK_SUCCESS]);

    if (action.type === types.CANCEL_DELETE_BOOKMARK || action.type === types.DELETE_BOOKMARK_ERROR) {
      yield cancel(task);
      yield take(cancelDone);
      yield put({type: types.READD_BOOKMARK_TO_UI, id});
    }
    yield put({type: types.HIDE_UNDO, id});  // TODO: THIS SHOULD GO ELSEWHERE...
  } finally {
    console.log('terminated');
  }
}


export default function* rootSaga() {
  yield* takeEvery(types.DELETE_BOOKMARK, deleteBookmark)
}
