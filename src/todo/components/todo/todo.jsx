import React from "react";
import Item from "./item/item";
import TodoForm from "./form/form";
import styles from './todo.module.scss';


export default class Todo extends React.Component {
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
    }

    handleCheckedItem = (id) => {
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
    }

    handleDeleteItems = (item) => {
        console.log('callback props.id', item);
        const newItems = this.state.items.filter(n => n.id !== item);
        this.setState({
            items: newItems
        })
    }

    handleEditItem = (param) => {
        console.log('param', param);
        // const isEditItems = this.state.items.filter(EditingItems => EditingItems.id !== param);
        this.setState({
            items: {
                // isEditItems: this.state.items.isEditState = true
            }
        })

        console.log(this.state.items);

    }

    ClearAllItems = () => {
        this.setState({
            items: []
        })
    }

    render() {
        const stateTodo = this.state;
        const itemLength = stateTodo.items.length;

        return (
            <div>
                <div className="routing">

                </div>
                <div className={styles.todoList}>
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
                                  editStateProps={this.handleEditItem}
                            />
                            ))
                        : <div className={styles.empty}>Create you first item</div>

                        }

                     <TodoForm onSubmit={this.addItem}
                               isItemLength={itemLength}
                               onClear={this.ClearAllItems}
                     />
                </div>
            </div>
        )
    }
}
