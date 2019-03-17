import Types from '../types';
import DataStore from '../../dao/DataStore';

//下拉刷新数据
export function onRefreshDemands(url, type){
    return dispatch => {
        dispatch({type: Types.DEMANDS_REFRESH, isLoading: true});
        let dataStore = new DataStore();
        dataStore.fetchData(url, type)
            .then(data => {
                    dispatch({
                        type: Types.DEMANDS_REFRESH_SUCCESS,
                        data: data && data.data,
                        isLoading: false
                    })
            })
            .catch(err => {
                dispatch({
                    type: Types.DEMANDS_REFRESH_FAIL,
                    err,
                    isLoading: false
                })
            })
    }
}

//加载更多数据
export function onLoadMoreDemands(pageSize, pageIndex){
    return dispatch => {
        dispatch({
            type: Types.DEMANDS_LOAD,
            isLoading: true
        })

    }
}


