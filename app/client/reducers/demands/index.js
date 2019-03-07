import Types from '../../action/types';

const defaultState = {
    items: [
        {
            companyName: '华为',
            description: '5g交换机校园合作',
            img_url: ['',''],
            contact:{
                phone: 13628671309,
                qq: 1102847670
            }
        },
        {
         companyName: '洛可可',
         description: '灯具设计',
         img_url: ['',''],
         contact:{
             phone: 13628671309,
             qq: 1102847670
            }
        }
    ],
    isLoading: false,
}

export default function onAction(state= defaultState, action){
    switch(action.type){
        case Types.DEMANDS_REFRESH_SUCCESS:
            return {
                ...state,
                items: [...state[items],action.data],
                isLoading: false
            };
        case Types.DEMANDS_REFRESH:
            return {
                ...state,
                items: action.items,
                isLoading: true
            };
        case Types.DEMANDS_REFRESH_FAIL:
            return {
                ...state,
                items: [...state[items]],
                isLoading: false
            };
        default:
            return state;
    }
}