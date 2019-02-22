import {applyMiddleware, createStore} from 'redux'
import thunk from 'redux-thunk'
import reducers from '../reducers'

/**
 * 自定义log中间件
 */
const logger = store => next => action => {
    if(typeof action == 'function'){
        console.log(`dispatch a function`);
    } else {
        console.log(`dispatch ${action}`);
    }
    const result = next(action);
    console.log(`next state ${store.getState()}`)
    return result
}

const middleWares = [
    logger,
    thunk
]

export default createStore(reducers, applyMiddleware(...middleWares))