import * as types from '../actions/actionTypes';

export default function notificationMiddleware({ dispatch, getState }) {
  return next => action => {

    return next(action);
  };
}
