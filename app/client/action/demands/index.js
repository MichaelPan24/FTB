import Types from '../types';
import DataStore from '../../dao/DataStore';

//下拉刷新数据
export function onRefreshDemands(url){
    return dispatch => {
        dispatch({type: Types.DEMANDS_REFRESH});
        let dataStore = new DataStore();
        dataStore.fetchData(url)
            .then(data => {
                handleData(Types.DEMANDS_REFRESH_SUCCESS, dispatch, data);
            })
    }
}

//加载更多数据
export function onLoadMoreDemands(){
    return dispatch => {
        dispatch({
            type: Types.DEMANDS_REFRESH,
            
        })
    }
}

function handleData(type, dispatch, data){
    dispatch({
        type,
        data: data&&data.data
    })
}

