import React, {Component, PropTypes} from 'react'
import Todo from './Todo'
import AddTodoCont from '../containers/AddTodoCont'

export default class TodoList extends Component {
    constructor(props){
        super(props)
    }

    render() {
        return (
            <div>

            <AddTodoCont />

            <br />
            {'Last viewed:'} {this.props.lastViewed}
            
            <ul>
                {this.props.todos.map(todo => {
                        return (
                            <Todo
                                key={todo.id}
                                {...todo}
                                onRemoveClick={() => this.props.onRemoveClick(todo.id)}
                                onToggleClick={() => this.props.onToggleClick(todo.id)} /> 
                        )
                    }
                )}  
            </ul>
            </div>
        )
    }
}


TodoList.propTypes = {
    lastViewed: PropTypes.number,
    onRemoveClick: PropTypes.func.isRequired,
    onToggleClick: PropTypes.func.isRequired,
    todos: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        completed: PropTypes.bool.isRequired,
        selected: PropTypes.bool.isRequired,
        text: PropTypes.string.isRequired
    }).isRequired).isRequired
}

