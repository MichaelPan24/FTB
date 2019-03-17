import Types from '../../action/types';

const defaultState = {
    data: [
        // {
        //     companyName: '华为',
        //     description: '5g交换机校园合作',
        //     img_url: ['',''],
        //     contact:{
        //         phone: 13628671309,
        //         qq: 1102847670
        //     }
        // },
        // {
        //  companyName: '洛可可',
        //  description: '灯具设计',
        //  img_url: ['',''],
        //  contact:{
        //      phone: 13628671309,
        //      qq: 1102847670
        //     }
        // }
    ],
    isLoading: false,
}

export default function onAction(state= defaultState, action){
    switch (action.type) {
        case Types.DEMANDS_REFRESH_SUCCESS:     //下拉刷新成功
            return {
                ...state,
                data: [...state[`data`], ...action.data],
                isLoading: false
            };
        case Types.DEMANDS_REFRESH:     //下拉刷新
            return {
                ...state,
                isLoading: true
            };
        case Types.DEMANDS_REFRESH_FAIL:    //下拉刷新失败
            return {
                ...state,
                isLoading: false
            };
        case Types.DEMANDS_LOAD:        //上拉加载更多
            return {
                ...state,
                isLoading: true
            };
        case Types.DEMANDS_LOAD_SUCCESS:    //上拉加载更多成功
            return {
                ...state,
                isLoading: false,
                data: [...state[data], action.data]
            };
        case Types.DEMANDS_LOAD_FAIL:       //上拉加载更多失败
            return {
                ...state,
                isLoading: false,
                err: action.err,
            }
        default:
            return state;
    }
}