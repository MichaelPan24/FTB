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
                    registeredUser: data,
                    isRegistered: true
                })
            }).catch(err => {
                dispatch({
                    type: Types.REGISTER_FAIL,
                    isRegistered: false,
                    errType: err,
                    msg: err
                })
            })
    }
}


//上传新的需求或作品展示时将会派发的action
export function onUploadNew(identify, formData){
    return dispatch => {
        dispatch({type: Types.UPLOAD_NEW});     //上传图片中
        let uploadNew = new UploadNew(identify, formData);
        uploadNew.uploadData()
            .then( result => {
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

/**
 * 获取用户发布的需求或者是作品列表
 * @param {String} userId 用户的id
 * @param {String} identify  用户身份
 */
export function onGetProject(userId, identify){
    return dispatch => {
        dispatch({type: Types.GET_PROJECT});
        let userProject = new User();
        userProject.getProject(userId, identify)
            .then( userProject => {
                dispatch({
                    type: Types.GET_PROJECT_SUCCESS,
                    userProject: userProject
                })
            }).catch(err => {
                dispatch({
                    type: Types.GET_PROJECT_FAIL,
                    msg: err
                })
            })
    }
}

/**
 * 用户删除发布项目操作
 * @param {String} userId   根据当前用户id 来删除user集合中的对应 user的发布项目 
 * @param {String} identify 根据identify 决定要到哪个集合去删除所选项
 * @param {String} projectId 要删除的项目id
 */
export function onRemoveProject(userId, identify, projectId){
    return dispatch => {
        dispatch({})
    }
}

/**
 * 根据type获取用户的收藏列表
 * @param {String} userId 用户id
 * @param {String} type 收藏类型
 */
export function onGetFavorite(userId, type){
    return dispatch => {
        dispatch({type: Types.GET_FAVORITE});
        let user = new User();
        user.getFavorite(userId, type)
            .then(userFavorite => {
                switch(type){
                    case 'project':
                        dispatch({
                            type: Types.GET_FAVORITE_SUCCESS,
                            userFavoriteDemand: userFavorite
                        });
                        break;
                    case 'work':
                        dispatch({
                            type: Types.GET_FAVORITE_SUCCESS,
                            userFavoriteWork: userFavorite
                        });
                        break;
                }
            }).catch(err => {
                dispatch({
                    type: Types.GET_FAVORITE_FAIL,
                    msg: err
                })
            })
    }
}

/**
 * 
 * @param {*} userId 
 * @param {*} formData 
 */
export function onUpdateUserInfo(userId, formData){
    return dispatch => {
        dispatch({type: Types.UPDATE_INFO});
        let user = new User(formData);
        user.updateUserInfo(userId)
            .then(data => {
                dispatch({
                    type: Types.UPDATE_INFO_SUCCESS,
                    updateUser: data
                })
            }).catch(err => {
                dispatch({
                    type: Types.UPDATE_INFO_FAIL,
                    msg: err
                })
            })
    }
}

/**
 * 
 * @param {*} type 
 * @param {*} userId 
 * @param {*} favItem 
 */
export function onLike(type, userId, favItem){
    return dispatch => {
        let user = new User(favItem);
        let pendingUser = user.like(userId);
        switch(type){
            case 'project':
                dispatch({type: Types.LIKE_PROJECT});
                pendingUser
                    .then(updatedUser => {
                        dispatch({
                            type: Types.LIKE_PROJECT_SUCCESS,
                            updatedUser: updatedUser
                        })
                    }).catch(err => {
                        dispatch({
                            type: Type.LIKE_PROJECT_FAIL,
                            msg: err
                        })
                    });
                    break;
            case 'work':
                dispatch({type: Types.LIKE_WORK});
                pendingUser
                    .then(updatedUser => {
                        dispatch({
                            type: Types.LIKE_WORK_SUCCESS,
                            updatedUser: updatedUser
                        })
                    }).catch(err => {
                        dispatch({
                            type: Type.LIKE_WORK_FAIL,
                            msg: err
                        })
                    });
        }
    }
}

export function onPushComment(){
    return dispatch => {
        dispatch({type: Types.PUSH_COMMENT});
        let user = new User()
        user.pushComment(userId, workId)
            .then(newComment => {
                dispatch({
                    type: Types.PUSH_COMMENT_SUCCESS,
                    newComment: newComment
                })
            }).catch(err => {
                dispatch({
                    type: Types.PUSH_COMMENT_FAIL,
                    msg: err
                })
            })
    }
}