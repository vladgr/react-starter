import React, {Component, PropTypes} from 'react'

export default class Todo extends Component {
  constructor(props){
    super(props)
  }

  render() {
    return (
        <li style={{
                textDecoration: this.props.completed ? 'line-through' : 'none',
                backgroundColor: this.props.selected ? '#999' : '#f1f1f1'
            }}
        >
        {this.props.id}{':'} <span onClick={this.props.onToggleClick}>{this.props.text}</span> {' '}
        <span onClick={this.props.onRemoveClick}><small>{'remove'}</small></span>
        </li>
    )
  }
}


Todo.propTypes = {
    completed: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired,
    onRemoveClick: PropTypes.func.isRequired,
    onToggleClick: PropTypes.func.isRequired,
    selected: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
}

export default Todo
