import Types from '../types';
import UploadNew from '../../dao/UploadNew';

//上传新的需求或作品展示时将会派发的action
export function onUploadNew(identify, formData){
    return dispatch => {
        dispatch({type: Types.UPLOAD_NEW, isLoading: true})     //上传图片中
        let uploadNew = new UploadNew(identify, formData);
        uploadNew.uploadData().then((result) => {
                dispatch({
                    type: Types.UPLOAD_NEW_SUCCESS,
                    isLoading: false,
                    uploaded: result
                })
        }).catch((err) => {
            dispatch({
                type: Types.UPLOAD_NEw_FAIL,
                isLoading: false
            })   
        });
    }
}