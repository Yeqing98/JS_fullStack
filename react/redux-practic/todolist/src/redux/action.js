import * as ActionType from './actionTypes';

export function addList(list) {
    return { type: ActionType.ADD_LIST, list }
}

export function showList(index) {
    return { type: ActionType.CHANGE_STATE, index }
}