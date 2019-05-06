import  Types from '../types';
import DataStore from '../../dao/DataStore';


//获取最新数据的异步action
export function onRefreshShowWorks(url, type, pageSize, pageIndex){
    return dispatch => {
        dispatch({type: Types.SHOW_REFRESH});
        let dataStore = new DataStore();    //异步action和数据流
        dataStore.fetchData(url, type)
            .then(data => {
                dispatch({
                    type: Types.SHOW_REFRESH_SUCCESS,
                    data: data && data.data ,
                    // currentItems: handleData()
                })  
            })
            .catch(err => {
                dispatch({
                    type: Types.SHOW_REFRESH_FAIL,
                    err: err,
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

export function onLoadComments(url,  workId){
    return dispatch => {
        dispatch({type: Types.LOAD_COMMENTS});
        let dataStore = new DataStore();
        dataStore.fetchData(url, 'comments', workId)
            .then(data => {
                dispatch({
                    type: Types.LOAD_COMMENTS_SUCCESS,
                    comments: data
                })
            }).catch(err => {
                dispatch({
                    type: Types.LOAD_COMMENTS_FAIL,
                    msg: err
                })
            })
    }
}