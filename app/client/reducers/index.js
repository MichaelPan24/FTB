import {combineReducers} from 'redux';

import demands from './demands'
import showWorks from './showWorks';

const rootReducer = combineReducers({
    demands: demands,
    showWorks: showWorks
});

export default rootReducer;