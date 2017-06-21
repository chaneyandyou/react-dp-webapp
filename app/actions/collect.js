import * as actionsTypes from '../constants/collect'

export function update(data) {
    return {
        type: actionsTypes.COLLECT_UPDATE,
        data
    }
}

export function add(item) {
    return {
        type: actionsTypes.COLLECT_ADD,
        item
    }
}

export function remove(item) {
    return {
        type: actionsTypes.COLLECT_RM,
        item
    }
}