import  Types from '../types';
import DataStore from '../../dao/DataStore';


//获取最新数据的异步action
export function onRefreshShowWorks(url, type, pageSize, pageIndex){
    return dispatch => {
        dispatch({type: Types.SHOW_REFRESH, isLoading: true});
        let dataStore = new DataStore();    //异步action和数据流
        dataStore.fetchData(url, type)
            .then(data => {
                dispatch({
                    type: Types.SHOW_REFRESH_SUCCESS,
                    data: data && data.data ,
                    isLoading: false,
                    // currentItems: handleData()
                })  
            })
            .catch(err => {
                dispatch({
                    type: Types.SHOW_REFRESH_FAIL,
                    err,
                    isLoading: false
                })
            })
    }
}

// handleData(dispatch, type, data, )

//加载更多,稍后补充
export function onLoadMoreShowWorks(pageIndex, pageSize, showArr,  ){
    return dispatch => {
        dispatch({
            type: Types.SHOW_LOAD_SUCCESS,
            pageIndex
        })
        setTimeout(()=>{
            
        }, 300)
    }
}