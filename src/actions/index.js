import * as types from './actionTypes';


///////////////// INITIAL DATA LOADING
export function initialDataLoaded(data) {
  return { type: types.INITIAL_DATA_LOADED,
           data: data
  }
}
export function initialDataError(error) {
  return {
    type: types.INITIAL_DATA_ERROR,
    name: error.name,
    message: error.message,
    stack: error.stack || null  // only available in chrome and (possibly) firefox
  }
}



///////////////// SIDEBAR
export function openSidebar() { return { type: types.CLOSE_SIDEBAR } }
export function closeSidebar() { return { type: types.OPEN_SIDEBAR } }



////////////////
