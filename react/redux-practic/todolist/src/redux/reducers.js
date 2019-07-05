import { combineReducers } from 'redux';
import * as ActionType from './actionTypes';

const listState = {
    list: []
}
// {type:"ADD_LIST",list:status}
function addList(list = listState.list, action) {
    switch (action.type) {
        case ActionType.ADD_LIST:
            return [...list, action.list];
        case ActionType.CHANGE_STATE:
            list[action.index].show = !list[action.index].show;
            console.log("23", list)
            // list[action.index].show = show;
            return list;
        default:
            return list
    }
}
// function showList(list = listState.list, action) {
//     switch (action.type) {
//         case ActionType.CHANGE_STATE:
//             // let show = !list[action.index].show;
//             console.log("23", list)
//             // list[action.index].show = show;
//             return list;
//         default:
//             return list
//     }
// }
export default combineReducers({ addList })