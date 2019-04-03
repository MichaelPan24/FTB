import Types from '../../action/types';

const defaultState = {
    registered: false, //是否成功注册
    isLoading: false, //加载状态
    isLogin: false, //是否登录
    identify: '0',  //用户的身份
    uploaded: [],   //用户上传的项目
    favorite: []    //用户收藏的项目
}

export default function userAction(state = defaultState, action){
    switch(action.type){
        case Types.LOGIN:       //用户登录
            return {    
                ...state,
                isLoading: true,
                isLogin: false,
                // uploaded: action.uploaded,
                // favorite: action.favorite
            };
        case Types.LOGIN_SUCCESS:       //登陆成功
            return {
                ...state,
                isLoading: false,
                isLogin: true,
                identify: action.identify,
                user:action.user
            }
        case Types.LOGIN_FAIL:      //登陆失败
            return {
                ...state,
                isLoading: false,
                isLogin: false,
                msg: action.msg
            }
        case Types.LOGOUT:      //用户登出
            return {
                ...state,
                isLoading: true,
            }
        case Types.LOGOUT_SUCCESS:      //登出成功
            return {
                ...state,
                isLoading: false,
                isLogin: false
            }
        case Types.LOGOUT_FAIL:     //登出失败
            return {
                ...state,
                isLoading: false,
                isLogin: true
            }
        case Types.REGISTER:    //用户注册
            return {
                ...state,
                isLoading: true,
                registered: false
            };
        case Types.REGISTER_SUCCESS:    //注册成功
            return {
                ...state,
                isLoading: false,
                registered: true
            };
        case Types.REGISTER_FAIL:       //注册失败
            return {
                ...state,
                isLoading: false,
                registered: false,
                msg: user
            };
        case Types.UPLOAD_NEW_SUCCESS:  //发布新需求或者是作品
            return {
                ...state,
                uploaded: [...state['uploaded'], action.uploaded],
                isLoading: false
            };
        case Types.UPLOAD_NEW:      //加载发布状态
            return {
                ...state,
                isLoading: true
            };
        case Types.UPLOAD_NEw_FAIL:     //发布失败
            return {
                ...state,
                isLoading: false
            };
        default:
            return state;
    }
}