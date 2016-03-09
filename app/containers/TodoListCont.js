import { connect } from 'react-redux'
import { toggleTodo, removeTodo } from '../actions'
import TodoList from '../components/TodoList'

const mapStateToProps = (state) => {
    return {
        lastViewed: state.todosState.lastViewed,
        todos: state.todosState.todos
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onToggleClick: (id) => {
            dispatch(toggleTodo(id))
        },
        onRemoveClick: (id) => {
            dispatch(removeTodo(id))
        }
    }
}

const TodoListCont = connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList)

export default TodoListCont
