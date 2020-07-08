import React from "react";
import shortid from 'shortid';
import style from './form.module.scss'

export default class TodoForm extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            text: "",
            id: 0,
            checked: false,
            onHold: false
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
            id: shortid.generate(),
            checked: false,
            onHold: false

        });
        this.setState({
            text: ''
        });
    }

    onClear = (event) => {
        event.preventDefault();
        this.props.onClear({
            items: []
        })
    }

    render() {
        const formState = this.state;
        return (
            <form className={style.form} onSubmit={this.onSubmit}>
                <div className={style.divider}></div>
                <input
                    onChange={this.onChangeWhere}
                    placeholder={'Add more'}
                    value={formState.text}
                    type="text"
                />
                <div className="btn-group">
                    <button disabled={!formState.text}>{!formState.text ? "Blocked" : "Send"}</button>
                    {this.props.isItemLength
                        ?<button onClick={this.onClear}>Delete {this.props.isItemLength}</button>
                        : null
                    }
                </div>
            </form>
        )
    }
}