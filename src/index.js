import React from 'react';
import ReactDOM from 'react-dom';
import invariant from 'redux-immutable-state-invariant'
import 'tachyons';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createLogger } from 'redux-logger'
import thunkMiddleWare from 'redux-thunk'
import { Provider } from 'react-redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import './index.css';
import { searchRobots, requestRobots } from './containers/App/reducer';
import registerServiceWorker from './registerServiceWorker';
import App from './containers/App/App';

// root
const rootReducer = combineReducers({searchRobots, requestRobots})

let store
if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
    store = createStore(rootReducer, composeWithDevTools({
        trace: true,
        traceLimit: 25,
      })(
        applyMiddleware(invariant(), thunkMiddleWare, createLogger()),
        // other enhancers
    ))
} else {
    store = createStore(rootReducer, applyMiddleware(thunkMiddleWare))
}

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
