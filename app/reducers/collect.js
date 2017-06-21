import * as actionsTypes from '../constants/collect'

const initCollect = [];

export default function collect(state=initCollect,action) {
    switch (action.type){
        case actionsTypes.COLLECT_UPDATE:
            return action.data;
        case actionsTypes.COLLECT_ADD:
            state.unshift(action.data);
            return state;
        case actionsTypes.COLLECT_RM:
            return state.filter(item => {
                if (item.id !== action.data.id) {
                    return item
                }
            });
        default :
            return state;
    }
}