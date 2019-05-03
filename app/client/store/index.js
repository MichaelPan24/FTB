import {applyMiddleware, createStore, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import {persistStore, persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage'

// import reducers from '../reducers';
import reducers from '../reducers';
const {demandsReducer, showWorksReducer, userReducer} = reducers;

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

const rootPersistConfig = {
    key: 'root',
    storage,
    stateReconciler: autoMergeLevel2,
    // blacklist: ['demands', 'showWorks'],
    // whiteList: ['user']
  }

const userPersistConfig = {
  key: 'user',
  // stateReconciler: autoMergeLevel2,
  storage: storage,
  blacklist: ['isLoading', 'isUploaded', 'registered'],
  whiteList: ['favorite', 'uploaded']
}

// const demandPersistConfig = {
//     key: 'demands',
//     storage: storage,
//     blacklist: ['isLoading']
// }

// const showWorksPersistConfig = {
//     key: 'showWorks',
//     storage: storage,
//     blacklist: ['isLoading', 'isUploaded', 'registered']
// }

const rootReducer = combineReducers({
    user: persistReducer(userPersistConfig, userReducer),
    demands: demandsReducer,
    showWorks: showWorksReducer
})

const persistedReducer = persistReducer(rootPersistConfig, rootReducer)

export default () => {
    let store = createStore(persistedReducer, applyMiddleware(...middleWares))
    let persistor = persistStore(store)
    return { store, persistor }
  }
// export default createStore(reducers, applyMiddleware(...middleWares))