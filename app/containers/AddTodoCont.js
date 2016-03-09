import React, {Component, PropTypes} from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'


class AddTodoCont extends Component{
    constructor(props){
        super(props)
        this.input = null
    }

    render(){
        return (
            <div>
                <form onSubmit={e => {
                    e.preventDefault()
                    if (!this.input.value.trim()) {
                      return
                    }
                    this.props.dispatch(addTodo(this.input.value))
                    this.input.value = ''
                }}>
                
                    <input ref={node => {this.input = node}} />
                    <button type="submit">{'Add Todo'}</button>
                </form>
            </div>
        )
    }
}

AddTodoCont.propTypes = {
    dispatch: React.PropTypes.func.isRequired
}

AddTodoCont = connect()(AddTodoCont)

export default AddTodoCont
