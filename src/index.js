/* eslint-disable import/default */
/* global __DEV__ */

import React  from 'react';
import {render} from 'react-dom';

import { Provider } from 'react-redux';
import { Router, browserHistory, Route, IndexRoute, IndexRedirect } from 'react-router';

import BookmrkrApp from './components/BookmrkrApp';
import configureStore from './store/configureStore';

// initial state
const store = configureStore({
  sidebar : {
    isOpen: "fadfds"
  }
});

// root component
const App = (props) => {
  return (
    <div>
      {props.children || <BookmrkrApp/> }
    </div>
  );
};


// app routes
const routes = (
  <Route path="/" component={App}  >
    <IndexRoute component={BookmrkrApp} />
  </Route>
);

// render the application root
render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>, document.getElementById('app')
);
