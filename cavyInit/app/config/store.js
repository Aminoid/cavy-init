import {
    createStore,
    compose,
    applyMiddleware
} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

const store = compose(
    applyMiddleware(
        thunk,
        logger
    ))(createStore);

export default store;
