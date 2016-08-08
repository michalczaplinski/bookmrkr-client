/* eslint-disable import/default */
/* global __DEV__ */

import React  from 'react';
import {render} from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory, Route, IndexRoute, IndexRedirect } from 'react-router';
import 'whatwg-fetch';

import BookmrkrApp from './containers/BookmrkrApp/BookmrkrApp';
import configureStore from './store/configureStore';
import { initialDataLoaded, initialDataLoadingFailed, initialDataError } from './actions';

import GLOBALS from './globals';

// sanitize.css (CSS reset)
import style from '../node_modules/sanitize.css/sanitize.css';


// initial state
const store = configureStore({
  sidebar : {
    isOpen: false
  }
});


fetch(`${GLOBALS.api_path}/bookmarks`, {credentials: 'include'}).then(response => {
  if (response.status >= 200 && response.status < 300) {
    return response.json();
  } else if (response.status == 403) {
    window.location.replace(GLOBALS.website_path);  //TODO: update the URL.
  }
  throw new Error(response.status);

}).then(json => {
  store.dispatch(initialDataLoaded(json));
  // render the application root
  render(
    <Provider store={store}>
      <Router history={browserHistory} routes={routes} />
    </Provider>, document.getElementById('app')
  );

}).catch(error => {
  console.log(error);
  store.dispatch(initialDataError(error));
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

