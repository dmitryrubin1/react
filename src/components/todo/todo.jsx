import React from "react";
import Item from "./item/item";
import TodoForm from "./form/form";
import {buttonStyle} from './constants.js';
import styles from './todo.modules.scss';

class Todo extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            items: [],
        }
    }

    addItem = (item) => {
        this.setState({
            items: this.state.items.concat(item)
        })
        console.log(this.state.items);
    }

    handleCheckedItem = (id) => {
        console.log(id);

        const updateItems = this.state.items.map(item =>
            (item.id === id ? {...item, checked: !item.checked} : item)
        )

        this.setState({
            items: updateItems
        })
    }

    handlePauseItem = (item) => {
        const isOnHoldItem = this.state.items.map(i =>
            (i.id === item ? {...i, onHold: !i.onHold} : i)
        )

        this.setState({
            items: isOnHoldItem
        })

        console.log(this.state.items);
    }

    handleDeleteItems = (item) => {
        console.log('callback props.id', item);
        const newItems = this.state.items.filter(n => n.id !== item);
        this.setState({
            items: newItems
        })
        // console.log(newItems);
    }

    clearAll = () => {
        this.setState({
            items: []
        })
    }

    render() {
        const stateTodo = this.state;
        const itemLength = stateTodo.items.length;

        return (
            <div id={'list'} className={styles.todoList}>
                {itemLength
                ? this.state.items.map((item, index) => (
                    <Item text={item.text}
                          key={index}
                          id={item.id}
                          checked={item.checked}
                          isOnHold={item.onHold}
                          onChangeStatus={this.handleCheckedItem}
                          pauseItemProps={this.handlePauseItem}
                          deleteItemsProps={this.handleDeleteItems}
                    />
                    ))
                : <div>Create you first item</div>

                }

                 <TodoForm onSubmit={this.addItem}/>
                {itemLength
                    ? <button style={buttonStyle} onClick={this.clearAll}>clear all items</button>
                    : null
                }
            </div>
        )
    }
}

export default Todo;