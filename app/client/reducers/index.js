import {combineReducers} from 'redux';

import demands from './demands'
import showWorks from './showWorks';
import user from './user';

const rootReducer = combineReducers({
    demands: demands,
    showWorks: showWorks,
    user: user
});

export default rootReducer;