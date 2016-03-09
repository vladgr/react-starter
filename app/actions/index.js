import * as types from '../constants/actionTypes';

export function addTodo(text){
    return {type: types.ADD_TODO, text}
}

export function toggleTodo(id){
    return {type: types.TOGGLE_TODO, id}
}

export function removeTodo(id){
    return {type: types.REMOVE_TODO, id}
}

export function selectTodo(id){
    return {type: types.SELECT_TODO, id}
}
