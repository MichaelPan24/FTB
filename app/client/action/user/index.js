import Types from '../types';
import User from '../../dao/User';
import UploadNew from '../../dao/UploadNew';

/**
 * 派发登录态action
 * 来更新store中的 isLogin状态
 */
export function onLogin(formData){
    return dispatch => {
        dispatch({type: Types.LOGIN, isLogin: false});
        let user = new User(formData);
        user.login()
            .then(data => {
                dispatch({
                    type: Types.LOGIN_SUCCESS,
                    isLogin: true,
                    identify: data.user.identify,
                    user: data.user
                })
            })
            .catch(err => {
                dispatch({
                    type: Types.LOGIN_FAIL,
                    isLogin: false,
                    errType: err,
                    msg: err
                })
            })
    }
}

export function onLogout(){
    return dispatch => {
        dispatch({type: Types.LOGOUT, isLogin: true});
        let user = new User(null);
        user.logOut()
            .then(data => {
                dispatch({
                    type: Types.LOGOUT_SUCCESS,
                    isLogin: false
                })
            }).catch(err => {
                dispatch({
                    type: Types.LOGOUT_FAIL,
                    isLogin: true,
                    msg: err
                })  
            })
    }
}

export function onRegister(formData){
    return dispatch => {
        dispatch({type: Types.REGISTER, });
        let user = new User(formData);
        user.register()
            .then(data => {
                dispatch({
                    type: Types.REGISTER_SUCCESS,
                    isUploaded: true
                })
            }).catch(err => {
                dispatch({
                    type: Types.REGISTER_FAIL,
                    msg: '注册失败',
                    err: err
                })
            })
    }
}

//上传新的需求或作品展示时将会派发的action
export function onUploadNew(identify, formData){
    return dispatch => {
        dispatch({type: Types.UPLOAD_NEW})     //上传图片中
        let uploadNew = new UploadNew(identify, formData);
        uploadNew.uploadData().then( result => {
                dispatch({
                    type: Types.UPLOAD_NEW_SUCCESS,
                    uploaded: result,
                    isUploaded: true
                })
        }).catch((err) => {
            dispatch({
                type: Types.UPLOAD_NEw_FAIL,
                isUploaded: false,
                msg: err
            })   
        });
    }
}