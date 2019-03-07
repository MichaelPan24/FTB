import Types from '../../action/types'

const defaultState = {
    // ShowWorks: {
        items: [
            
        ],
        isLoading: false,
        
    }
        



export default function LoadingWorks(state=defaultState, action){
    switch (action.type) {
        case Types.SHOW_REFRESH_SUCCESS:     //下拉刷新成功
            return {
                ...state,
                items:  [...state[`items`],  action.data],
                isLoading: false
            };
        case Types.SHOW_REFRESH:    //下拉刷新
            return {
                ...state,
                isLoading: true
            };
        case Types.SHOW_REFRESH_FAIL:   //下拉刷新失败
            return {
                ...state,
                isLoading: false
            }
        default:
            return state
    }
}
