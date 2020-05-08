import React from "react"
import NewTodoItem from './NewTodoItem'
import PropTypes from 'prop-types'

const style = {
    ul: {
        maxWidth: '700px',
        margin: '0 auto'
    }
}

export default class NewTodo extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            todos: [
                {id: 1, completed: false, title: 'что сделать 1'},
                {id: 2, completed: false, title: 'что сделать 2'},
                {id: 3, completed: false, title: 'что сделать 3'}
            ]
        }

        // console.log(props);
        // console.log(this.state);

    }

    onToggle = (id) => {
        console.log(id)
    }

    render () {
        return (
           <ul style={style.ul}>
               {
                   this.state.todos.map((todo, index) => {
                       return (
                           <NewTodoItem
                               key={index}
                               titleProps={todo.title}
                               completedProps={todo.completed}
                               idProps={todo.id}
                               onChangeProps={this.onToggle}
                           />
                       )
                   })
               }
           </ul>
        )
    }
}

NewTodo.propsTypes = {
    todos: PropTypes.arrayOf().object,
    onChangeProps: PropTypes.func.isRequired
}