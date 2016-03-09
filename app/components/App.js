import React, {Component} from 'react'
import About from './About'
import TodoListCont from '../containers/TodoListCont'
import {Link, RouteHandler} from 'react-router'

export default class App extends Component {
    constructor(props){
        super(props)
    }

    render() {
        return (
            <div>
                <ul>
                    <li><Link to="/">{'Home'}</Link></li>
                    <li><Link to="/about">{'About'}</Link></li>
                    <li><Link to="/todos">{'Todos'}</Link></li>
                </ul>

                <div>
                    {/* Router handler loaded here */}
                    {this.props.children}
                </div>

            </div>
        )
    }
}

App.propTypes = {
    children: React.PropTypes.element
}