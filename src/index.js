/* eslint-disable import/default */
/* global __DEV__ */

import React  from 'react';
import {render} from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory, Route, IndexRoute, IndexRedirect } from 'react-router';
import 'whatwg-fetch';

import BookmrkrApp from './containers/BookmrkrApp/BookmrkrApp';
import configureStore from './store/configureStore';

// sanitize.css (CSS reset)
import style from '../node_modules/sanitize.css/sanitize.css';

// initial state
const store = configureStore({
  sidebar : {
    isOpen: false
  }
});

let api_path = __DEV__
  ? 'http://json-server-bookmrkr.dev/bookmarks'
  : 'production_path';

fetch(api_path, {credentials: 'include'} ).then(response => {
  if (response.status >= 200 && response.status < 300) {
    return response.json();
  } else {
    // handle the network error
  }
}).then(json => {
  store.dispatch(/* the action */);
}).catch(error => {
  // handle the request failure somehow;
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
