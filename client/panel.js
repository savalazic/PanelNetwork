import React from 'react';
import { render } from 'react-dom';

import css from './styles/style.styl';

import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from './store';

import Login from './components/Login';
import App from './components/App';
import Single from './components/Single';
import PhotoGrid from './components/PhotoGrid';

import Raven from 'raven-js';
import { sentry_url } from './data/config';

import firebase from './firebase/index';

Raven.config(sentry_url).install();

firebase.auth().onAuthStateChanged((user) => {
	if (user) {
		history.push('/index');
	} else {
		history.push('/');
	}
});

const router = (
	<Provider store={store}>
	  <Router history={history}>
	    <Route path="/" component={App}>
	      <IndexRoute component={Login}></IndexRoute>
	      {/*<IndexRoute component={PhotoGrid}></IndexRoute>*/}
	      <Route path="index" component={PhotoGrid}></Route>
	      <Route path="/view/:postId" component={Single}></Route>
	    </Route>
	  </Router>
	</Provider>
);

render(router, document.getElementById('root'));
