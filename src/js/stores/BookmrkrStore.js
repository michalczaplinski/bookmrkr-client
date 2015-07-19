import {SHOW_SIDEBAR, HIDE_SIDEBAR } from '../constants/ActionTypes';

const initialState = [{
    sidebar_shown: false
}];

export default function bookmarks(state = initialState, action) {
    switch (action.type) {

        case SHOW_SIDEBAR:
            return state.sidebar_shown = true;

        case HIDE_SIDEBAR:
            return state.sidebar_shown = false;

        default:
            return state;
    }
}
