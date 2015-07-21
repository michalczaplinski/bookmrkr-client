import * as types from '../constants/ActionTypes';

//export function addBookmark(text) {
//    return {
//        type: types.ADD_BOOKMARK,
//        text
//    };
//}

function showSidebar() {
    return {
        type: types.SHOW_SIDEBAR
    };
}

function hideSidebar() {
    return {
        type: types.HIDE_SIDEBAR
    };
}

export function toggleSidebar() {
    return (dispatch, getState) => {
        const { appState } = getState();
        appState.sidebar_shown ? dispatch(hideSidebar()) : dispatch(showSidebar());
    };
}
