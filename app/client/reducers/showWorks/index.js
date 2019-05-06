import Types from '../../action/types'

const defaultState = {
    // ShowWorks: {
        // data: [

        // ],
        // info: '',
        // isLoading: false,
        // works: {
        //     byId: {
        //         'id1': {
        //             author: 'user1',
        //             comments: []
        //         }
        //     },
        //     ids: ['id1']
        // },
        // authors: {
        //     byId: {
        //         'user1': {
        //             userName: 'username',
        //             avatar: 'http://......'
        //         }
        //     },
        //     ids: ['user1']
        // },
        // comments: {
        //     byId: {
        //         'comment1': {
        //             author: 'user1',
        //             comment: 'awesome'
        //         }
        //     },
        //     ids: ['comment1']
        // }
    }
        


export default function LoadingWorks(state= defaultState, action){
    switch (action.type) {
        case Types.SHOW_REFRESH_SUCCESS:     //下拉刷新成功
            return {
                ...state,
                data:  [  ...action.data],   //原始数据
                // currentItems: action.currentItem,    //此次要显示的数据
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
                isLoading: false,
                info: action.err
            };
        case Types.SHOW_LOAD:   //上拉加载更多
            return {
                ...state,
                loadingMore: true
            };
        case Types.SHOW_LOAD_SUCCESS:   //上拉加载更多成功
            return {
                ...state,
                loadingMore: false,
                currentItems: action.currentItem  //上拉加载更多时要显示的数据
            };
        case Types.SHOW_LOAD_FAIL:  //上拉加载更多失败
            return {
                ...state,
                LoadingMore: false,
                info: action.info
            };
        case Types.LOAD_COMMENTS:
            return {
                ...state,
                loadComment: true,
            };
        case Types.LOAD_COMMENTS_SUCCESS:
            return {
                ...state,
                loadComment: false,
                comments: action.comments
            };
        case Types.LOAD_COMMENTS_FAIL:
            return {
                ...state,
                loadComment: false,
                msg: action.msg
            }
        default:
            return state
    }
}
