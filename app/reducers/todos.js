import * as types from '../constants/actionTypes';

const initialState = {
    todos: [
        {id:1, text: 'text1', completed:false, selected:false},
        {id:2, text: 'text2', completed:false, selected: false},
    ],
    lastViewed: 0
}

function getMaxId(todos){
    let maxId = 0;
    for (let todo of todos){
        if (todo.id > maxId){
            maxId = todo.id;
        }
    }
    return maxId + 1;
}

function todosState(state = initialState, action){
    let newState = null;

    switch (action.type){
        case types.ADD_TODO:
            let newId = getMaxId(state.todos)
            let newTodo = {
                id: newId,
                text: action.text,
                completed: false,
                selected: false
            }
            newState = {...state}
            newState.todos = [...newState.todos, newTodo]
            return newState
        
        case types.TOGGLE_TODO:
            let lastViewed = 0
            newState = {...state}
            newState.todos = newState.todos.map(todo => {
                if (todo.id === action.id){
                    todo.completed = !todo.completed
                    todo.selected = true
                    lastViewed = todo.id
                } else {
                    todo.selected = false
                }
                return todo
            })
            newState.lastViewed = lastViewed
            return newState
        
        case types.REMOVE_TODO:
            newState = {...state}
            newState.todos = newState.todos.filter((todo) => todo.id !== action.id)
            return newState
        
        default:
            return state
    }
}

export default todosState