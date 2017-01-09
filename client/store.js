import * as redux from 'redux';
import { createStore, compose } from 'redux';
import thunk from 'redux-thunk';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';

// import the root reducer
import rootReducer from './reducers/index';

import comments from './data/comments';
import posts from './data/posts';

// create an object for the default data
const defaultState = {
	posts: posts,
	comments: comments
};

const store = createStore(rootReducer, defaultState, redux.compose(
	redux.applyMiddleware(thunk),
	window.devToolsExtension ? window.devToolsExtension() : f => f
));

export const history = syncHistoryWithStore(browserHistory, store);

export default store;