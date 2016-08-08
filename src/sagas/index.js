import * as types from '../actions/actionTypes';
import { delay } from 'redux-saga'
import { call, put, take, fork, cancel } from 'redux-saga/effects'
import GLOBALS from '../globals';


function* performDelete(id) {
  try {
    yield call(delay, 5000);
    yield call(fetch, `${GLOBALS.api_path}/bookmarks/${id}`, {method: 'DELETE', credentials: 'include'} );

    yield put({type: types.DELETE_BOOKMARK_SUCCESS, id});
  } catch(error) {
    yield put({type: types.DELETE_BOOKMARK_ERROR, error});
  }
}


function* deleteBookmark() {
  //noinspection InfiniteLoopJS
  while (true) {
    const { id } = yield take(types.DELETE_BOOKMARK);

    yield put({type: types.REMOVE_BOOKMARK_FROM_UI, id});
    yield put({type: types.SHOW_UNDO});

    const task = yield fork(performDelete, id);

    const action = yield take([types.CANCEL_DELETE_BOOKMARK, types.DELETE_BOOKMARK_ERROR, types.DELETE_BOOKMARK_SUCCESS]);
    if (action.type != types.DELETE_BOOKMARK_SUCCESS) {
      yield cancel(task);
      yield put({type: types.READD_BOOKMARK_TO_UI, id})
    }
    yield put({type: types.HIDE_UNDO});  // TODO: THIS SHOULD GO ELSEWHERE...?
  }
}



export default function* rootSaga() {
  yield [ deleteBookmark() ]
}
