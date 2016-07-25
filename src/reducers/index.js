// Set up your root reducer here...
import { combineReducers } from 'redux';
import objectAssign from 'object-assign';

import * as types from '../actions/actionTypes';


function sidebar(state={}, action) {
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
      return state
  }
}


export default combineReducers({
  sidebar
});
