import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';

import counterReducer from './store/reducers/counter';
import resultReducer from './store/reducers/result';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const rootReducer = combineReducers({
    ctr: counterReducer,
    res: resultReducer
});

// middleware function
const logger = store => {
    return next => {
        // returns a function that receives the action we dispatched as input
        return action => {
            // this is the code we want to run in between the action and the reducer
            console.log('[Middleware] Dispatching', action);
            const result = next(action); // lets the action continue to the reducer
            console.log('[Middleware] next state', store.getState());
            return result;
        }
    }
};

// compose only applies to middlewares
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// pass the middleware here
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(logger)));

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
