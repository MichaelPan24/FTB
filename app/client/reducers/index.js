import {combineReducers} from 'redux';

import demands from './demands'
import showWorks from './showWorks';
import upload from './upload';

const rootReducer = combineReducers({
    demands: demands,
    showWorks: showWorks,
    upload: upload
});

export default rootReducer;