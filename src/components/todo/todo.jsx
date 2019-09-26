import React from 'react';
import ErrorMessage from "./message/error";
import Item from "./item/item";

class Todo extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            items: [],
            name: "",
            onHold: false,
            closed: false
        }
    }

    onChangeWhere = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    onSubmit = (event) => {
        event.preventDefault();
        const emptyInput = this.state.name.toString().length;

        if (emptyInput) {
            this.setState({
                items: [...this.state.items, this.state.name],
                name: ''
            })
        }
    }

    deleteItems = (e) => {
        e.preventDefault();
        this.setState({
            // удаляет с начала массива а не тот на который кликаю
            items: [...this.state.items].splice(1),
            name: '',
        });
    }

    checkedBox = (check) => {
        check.preventDefault();
        this.setState({
            closed: !this.state.closed,
        })
    };

    onHoldItem = () => {
        this.setState({
            onHold: !this.state.onHold
        });
    };

    render () {
        const itemLength = this.state.items.length;

        return (
            <div>
                {itemLength
                    ? (<span className='counter-item'>counter item {itemLength}</span>)
                    : (null)
                }

                {/*т.е если функция стрелочная ей не нужен bing в класс?*/}
                {this.state.items.map((item, index) =>

                    <Item items={item}
                          key={index}
                          checkedItem={this.checkedBox}
                          onHold={this.onHoldItem}
                          onDeleteItems={this.deleteItems}
                    />
                )}

                {itemLength
                    ? (<ErrorMessage class='success' text={'write you next item'}/>)
                    : (<ErrorMessage class='error' text={'you list is empty'}/>)
                }

                <form className="contact-form" onSubmit={this.onSubmit}>
                    <input
                        onChange={this.onChangeWhere}
                        placeholder={this.state.name}
                        value={this.state.name}
                        type="text"
                    />
                    <div className="btn-group">
                        <button disabled={!this.state.name}>{!this.state.name ? 'Заблокировано' : 'Отправить'}</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default Todo;