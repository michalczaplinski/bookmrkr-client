import {SHOW_SIDEBAR, HIDE_SIDEBAR } from '../constants/ActionTypes';

const initialState = [{
    sidebar_shown: false
}];

export default function bookmarks(state = initialState, action) {
    switch (action.type) {

        case SHOW_SIDEBAR:
            return [{ sidebar_shown: true}, ...state];

        case HIDE_SIDEBAR:
            return [{ sidebar_shown: false}, ...state];

        default:
            return state;
    }
}
