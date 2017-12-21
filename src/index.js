import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { createStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';

const initialState = {
}

// reducers
function startCreatingSecret(action) {
    console.log('actionCreator: startCreatingSecret: ' + JSON.stringify(action));
	return action.payload;
}
function failedCreatingSecret(action) {
	return action.payload;
}

// Actions the store should perform when an action is received
const myReducer = (state = initialState, action) => {
	switch (action.type) {
		default:
			return state;
	}
}

const sagaMiddleware = createSagaMiddleware();
const middleware = [
	sagaMiddleware
];

const composeEnhancers = (window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
const enhancer = composeEnhancers(
  applyMiddleware(...middleware)
);

const store = createStore(
  myReducer,
  enhancer
);

//sagaMiddleware.run(mySaga);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();

