import React from 'react';
import ErrorMessage from "./message/error";
import Item from "./item/item";

class Todo extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            items: [],
            name: "",
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
                items: [...this.state.items, this.state.name]
            })
        }
        this.state.name = ""
    }

    deleteItems(e) {
        e.preventDefault();
        this.setState({
            // удаляет с начала массива а не тот на который кликаю
            items: [...this.state.items].splice(1),
            name: '',
        });
    }

    render() {
        const itemLength = this.state.items.length;

        return (
            <div>
                {itemLength
                    ? (<span className='counter-item'>counter item {itemLength}</span>)
                    : (null)
                }

                {/*где этот цикл делать? внутри или снаружи */}
                {this.state.items.map((item, index) =>

                    <Item items={item}
                          key={index}
                          onDeleteItems={this.deleteItems.bind(this)}
                    />
                )}

                {/*
                   сохранять стэйт и пропсы в константу- переменную?
                   где делать условие? внутри компонента? или снаружи?
                   где определять переменную? в конструкторе через this?
                */}

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