import React from "react";
import {buttonStyle} from './../constants.js'

export default class TodoForm extends React.Component {

    constructor() {
        super();

        this.state = {
            text: "",
            checked: false
        }
    }

    onChangeWhere = (event) => {
        this.setState({
            text: event.target.value
        })
    }

    onSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit({
            text: this.state.text,
            checked: false
        });
    }

    render() {
        const formState = this.state;
        return (
            <form className="contact-form" onSubmit={this.onSubmit}>
                <input
                    onChange={this.onChangeWhere}
                    placeholder={formState.text}
                    value={formState.text}
                    id={formState.text}
                    type="text"
                />
                <div className="btn-group">
                    <button style={buttonStyle} disabled={!formState.text}>{!formState.text ? "Заблокировано" : "Отправить"}</button>
                </div>
            </form>
        )
    }
}