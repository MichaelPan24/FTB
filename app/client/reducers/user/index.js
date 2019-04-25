import Types from '../../action/types';

const defaultState = {
    // registered: false, //是否成功注册
    // isLoading: false, //加载状态
    // isLogin: false, //是否登录
    // identify: '0',  //用户的身份
    uploaded: [],   //用户上传的项目
    favorite: {demands: [], works: []}    //用户收藏的项目
}


export default function userAction(state = defaultState, action){
    switch(action.type){
        case Types.LOGIN:       //用户登录
            return {    
                // ...state,
                isLoading: true,
                isLogin: false,
                // uploaded: action.uploaded,
                // favorite: action.favorite
            };
        case Types.LOGIN_SUCCESS:       //登陆成功
            return {
                // ...state,
                isLoading: false,
                isLogin: true,
                identify: action.identify,
                user:action.user
            }
        case Types.LOGIN_FAIL:      //登陆失败
            return {
                // ...state,
                isLoading: false,
                isLogin: false,
                msg: action.msg
            }
        case Types.LOGOUT:      //用户登出
            return {
                // ...state,
                isLoading: true,
            }
        case Types.LOGOUT_SUCCESS:      //登出成功
            return {
                // ...state,
                isLoading: false,
                isLogin: false
            }
        case Types.LOGOUT_FAIL:     //登出失败
            return {
                // ...state,
                isLoading: false,
                isLogin: true
            }
        case Types.REGISTER:    //用户注册
            return {
                // ...state,
                isLoading: true,
                registered: false
            };
        case Types.REGISTER_SUCCESS:    //注册成功
            return {
                // ...state,
                isLoading: false,
                registered: true
            };
        case Types.REGISTER_FAIL:       //注册失败
            return {
                // ...state,
                isLoading: false,
                registered: false,
                msg: action.msg
            };
        case Types.UPLOAD_NEW_SUCCESS:  //发布新需求或者是作品
            if(state['isLogin']){
                // if(state['uploaded']){
                    return {
                        ...state,
                        uploaded:   action.uploaded,//state['uploaded'].concat(action.uploaded),
                        isLoading: false,
                        isUploaded: true
                    };
                // }
                // return {
                //     ...state,
                //     uploaded: action.uploaded,
                //     isLoading: false,
                //     isUploaded: true
                // }
            }
        case Types.UPLOAD_NEW:      //加载发布状态
            if(state['isLogin']){
                return {
                    ...state,
                    isLoading: true,
                    isUploaded: false
                };
            }
        case Types.UPLOAD_NEw_FAIL:     //发布失败
                return {
                    ...state,
                    isLoading: false,
                    isUploaded: false,
                    msg: action.msg
                };
        case Types.GET_PROJECT:
                return {
                    ...state,
                    isLoading: true,
                };
        case Types.GET_PROJECT_SUCCESS:
                return {
                    ...state,
                    isLoading: false,
                    uploaded: action.userProject
                };
        case Types.GET_PROJECT_FAIL:
                return {
                    ...state,
                    isLoading: false,
                    msg: actions.msg
                };
        case Types.GET_FAVORITE:
                return {
                    ...state,
                    isLoading: true,
                };
        case Types.GET_FAVORITE_SUCCESS:
                if(action.userFavoriteDemand){
                    return {
                        ...state,
                        isLoading: false,
                        favorite: {...state['favorite'], demands: action.userFavoriteDemand}
                    }
                }else if(action.userFavoriteWork){
                    return {
                        ...state,
                        isLoading: false,
                        favorite: {...state['favorite'], works: action.userFavoriteWork}
                    }
                }else if(!action.userFavoriteDemand || !action.userFavoriteWork){
                    return {
                        ...state,
                        isLoading: false,
                        favorite: {...state['favorite']}
                    }
                }
        case Types.UPDATE_INFO:
                return {
                    ...state,
                    isLoading: true
                };
        case Types.UPDATE_INFO_SUCCESS:
                return {
                    ...state,
                    isLoading: false,
                    user: action.updateUser
                };
        case Types.UPDATE_INFO_FAIL:
                return {
                    ...state,
                    isLoading: false,
                    msg: action.msg
                }
        default:
            return state;
    }
}