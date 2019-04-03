import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';
import reducers from '../reducers';

/**
 * 自定义logger中间件
 */
const logger = store => next => action => {
    if (typeof action === 'function') {
        console.log('dispatching a function');
    } else {
        console.log('dispatching ', action);
    }
    const result = next(action);
    console.log('nextState ', store.getState());
    return result;
};

const middleWares = [
    logger,
    thunk
];

export default createStore(reducers, applyMiddleware(...middleWares))