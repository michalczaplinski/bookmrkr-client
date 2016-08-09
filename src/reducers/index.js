import { combineReducers } from 'redux';
import objectAssign from 'object-assign';

import * as types from '../actions/actionTypes';


function ui(state={sidebar:{}, adder: {}}, action) {
  return {
    sidebar: sidebar(state.sidebar, action),
    adder:   adder(state.adder, action)
  }
}

function sidebar(state={isOpen: false}, action) {
  switch (action.type) {
    case types.CLOSE_SIDEBAR:
      return objectAssign({}, state, {
        isOpen: false
      });

    case types.OPEN_SIDEBAR:
      return objectAssign({}, state, {
        isOpen: true
      });

    default:
      return state;
  }
}

function adder(state={isOpen: false}, action) {
  switch (action.type) {
    case types.CLOSE_BOOKMARK_ADDER:
      return objectAssign({}, state, {
        isOpen: false
      });

    case types.OPEN_BOOKMARK_ADDER:
      return objectAssign({}, state, {
        isOpen: true
      });

    default:
      return state;
  }
}

function notifications(state=[], action) {
  switch (action.type) {
    case types.SHOW_UNDO:
      return state.concat(action.id);

    case types.HIDE_UNDO:
      return state.filter(id => id != action.id);

    default:
      return state;
  }
}


function data(state={bookmarks: [], deleteQueue: []}, action) {
  switch (action.type) {
    case types.INITIAL_DATA_LOADED:
      return {
        ...state,
        bookmarks: action.data
      };

    case types.REMOVE_BOOKMARK_FROM_UI:
      const item = state.bookmarks.find(item => item.id == action.id);  //TODO: error handler
      return {...state,
        bookmarks: state.bookmarks.filter(item => item.id !== action.id),
        deleteQueue: state.deleteQueue.concat(item)
      };

    case types.READD_BOOKMARK_TO_UI:
      return {
        ...state,
        bookmarks: state.bookmarks.concat(state.deleteQueue.find(item => item.id == action.id)),
        deleteQueue: state.deleteQueue.filter(item => item.id != action.id)
      };

    case types.DELETE_BOOKMARK_SUCCESS:
      return {
        ...state,
        deleteQueue: state.deleteQueue.filter(item => item.id != action.id)
      };

    default:
      return state;
  }
}

export function errors(state = { network: [], exceptions: [] }, action) {
  switch (action.type) {
    case types.INITIAL_DATA_ERROR:
      return [ ...state,
        { name: action.name,
          message: action.message,
          stack: action.stack
        }
      ];

    default:
      return state;
  }
}


export default combineReducers({
  ui,
  data,
  errors,
  notifications
});
