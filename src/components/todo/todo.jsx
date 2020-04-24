import React from "react";
import Item from "./item/item";
import TodoForm from "./form/form";
import {buttonStyle} from './constants.js'
import {enabledStyle} from './constants.js'
import {disabledStyle} from './constants.js'

class Todo extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            items: [],
            button: false
        }
    }

    enableTodoList = () => {
        this.setState({
            button: !this.state.button
        })
    }

    // Todo неправильно считается массив
    addItem = (item) => {
        this.setState({
            items: this.state.items.concat(item)
        })
        console.log(this.state.items);
    }

    handleCheckedItem = (id) => {
        console.log(id);

        // this.setState({
        //     items: id
        // })
    }

    handleDeleteItems = (item) => {
        // this.setState(prevState => ({
        //
        // }));

        console.log(this.state.items.filter(todo => todo !== item));
        console.log(item);
    }

    clearAll = () => {
        this.setState({
            items: []
        })
    }

    render() {
        const stateTodo = this.state;
        // const itemLength = stateTodo.items.length;

        return (
            <div>

                {this.state.items.map((item, id) => (
                    <Item text={item.text}
                          key={id}
                          id={id + 1}
                          // TODO что такое ()=>, как это работает?
                          isChecked={item.checked}
                          onStatusChange={this.handleCheckedItem}
                          deleteItemsProps={this.handleDeleteItems}
                    />
                ))}

                    <TodoForm onSubmit={this.addItem}/>
                {stateTodo.items.length
                    ? <button style={buttonStyle} onClick={this.clearAll}>clear all items</button>
                    : null
                }
            </div>
        )
    }
}

export default Todo;