import * as actionsTypes from '../constants/collect'

const initCollect = [];

export default function collect(state=initCollect,action) {
    switch (action.type){
        case actionsTypes.COLLECT_UPDATE:
            return action.data;
        case actionsTypes.COLLECT_ADD:
            state.unshift(action.item);
            return state;
        case actionsTypes.COLLECT_RM:
            console.log(action);
            return state.filter(item => {
                if (item.id !== action.item.id) {
                    return item
                }
            });
        default :
            return state;
    }
}