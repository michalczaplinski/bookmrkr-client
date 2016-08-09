import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers';
import createSagaMiddleware from 'redux-saga';

import notificationMiddleware from '../middleware/notificationMiddleware';

export default function configureStore(initialState) {
  return createStore(rootReducer, initialState,
    applyMiddleware(
      sagaMiddleware
    )
  );
}
