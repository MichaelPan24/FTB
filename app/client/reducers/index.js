// import {combineReducers} from 'redux';

import demandsReducer from './demands'
import showWorksReducer from './showWorks';
import userReducer from './user';

// const rootReducer = combineReducers({
//     demands: demands,
//     showWorks: showWorks,
//     user: user
// });

export default {demandsReducer, showWorksReducer, userReducer};
// export default rootReducer;