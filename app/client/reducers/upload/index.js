import { onUploadNew } from "../../action/upload";
import Types from '../../action/types';

const defaultState = {
    uploaded: [
        
    ],
    isLoading: false,

};

export default  function onUpload(state = defaultState, action){
    switch(action.type){
        case Types.UPLOAD_NEW_SUCCESS:
            return {
                ...state,
                uploaded: [...state['uploaded'], action.uploaded],
                isLoading: false
            };
        case Types.UPLOAD_NEW:
            return {
                ...state,
                isLoading: true
            };
        case Types.UPLOAD_NEw_FAIL:
            return {
                ...state,
                isLoading: false
            };
        default: 
            return state;
    }

}