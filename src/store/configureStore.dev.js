import {createStore, compose, applyMiddleware} from 'redux';
import rootReducer from '../reducers';
import createSagaMiddleware from 'redux-saga';

import rootSaga from '../sagas';

const sagaMiddleware = createSagaMiddleware();

export default function configureStore(initialState) {
  const store = createStore(rootReducer, initialState,
    compose(
      applyMiddleware(sagaMiddleware),
      window.devToolsExtension ? window.devToolsExtension() : f => f
    )
  );

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers').default; // eslint-disable-line global-require
      store.replaceReducer(nextReducer);
    });
  }

  sagaMiddleware.run(rootSaga);

  return store;

}

