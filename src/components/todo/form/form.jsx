import React from "react";

export default class TodoForm extends React.Component {

    state = {
        item: {
            text: "",
            checked: false
        }
    };

    onChangeWhere = (event) => {
        this.setState({
            item: {
                text: event.target.value
            }
        })
    }

    onSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit({
            item: {
                text: this.state.item.text,
                checked: false
            }
        });
    }

    render() {
        const formState = this.state;
        return (
            <form className="contact-form" onSubmit={this.onSubmit}>
                <input
                    onChange={this.onChangeWhere}
                    placeholder={formState.item.text}
                    value={formState.item.text}
                    id={formState.item.text}
                    type="text"
                />
                <div className="btn-group">
                    <button disabled={!formState.item.text}>{!formState.item.text ? "Заблокировано" : "Отправить"}</button>
                </div>
            </form>
        )
    }
}