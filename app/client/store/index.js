import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';
import {persistStore, persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage'

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

const persistConfig = {
    key: 'root',
    storage,
  }

const persistedReducer = persistReducer(persistConfig, reducers)

export default () => {
    let store = createStore(persistedReducer, applyMiddleware(...middleWares))
    let persistor = persistStore(store)
    return { store, persistor }
  }
// export default createStore(reducers, applyMiddleware(...middleWares))