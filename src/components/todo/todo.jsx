import React from "react";
import Item from "./item/item";
import TodoForm from "./form/form";

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

    addItem = (item) => {
        this.setState({
            items: [item, ...this.state.items]
        })
        console.log(item);
    }

    handlerCheckedItem = (choice) => {
        console.log(choice);

        const checkedItem = this.state.items;
        //

        this.setState({
            items: checkedItem
        })

        console.log(checkedItem);
        console.log(this.state);
    }

    handlerDeleteItems = (item) => {
        this.setState({
            items: [item, ...this.state.items],
            name: "",
        });
    }

    render() {
        const stateTodo = this.state;
        const itemLength = stateTodo.items.length;
        const enabledStyle = {
            color: "white",
            fontSize: "14px",
            background: "green",
            padding: "5px 12px",
            border: 0
        }
        const disabledStyle = {
            color: "white",
            fontSize: "14px",
            background: "red",
            padding: "6px 14px",
            border: 0
        }

        return (
            <div>
                {!itemLength
                    ?<button onClick={this.enableTodoList}
                            style={stateTodo.button ? disabledStyle : enabledStyle}
                    >
                        {stateTodo.button ? "Hide list" : "Show list"}
                    </button>
                    : null
                }

                {stateTodo.items.map((item, id) => (
                    <Item text={item.text}
                          key={id}
                          id={id + 1}
                          checkItem={this.handlerCheckedItem}
                          deleteItemsProps={this.handlerDeleteItems}
                    />
                ))}

                {stateTodo.button
                    ? <TodoForm onSubmit={this.addItem}/>
                    : null
                }

            </div>
        )
    }
}

export default Todo;