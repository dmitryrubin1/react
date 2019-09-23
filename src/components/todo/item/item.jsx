import React from 'react'
import DeleteControl from "../delete-control/delete-controls";
import ChoiceItem from "../choice-item/choice-item";
import OnHoldControl from "../onHold-control/onHold-contols";

class Item extends React.Component {
    /*нужно ли в каждом компоненте присваивать переменную пропсам и стейту типо const item = this.props и дальше использовать ее item.close например*/

    constructor(props) {
        super(props)
        console.log(this.props)

        this.state = {
            onHold: this.props.onHoldClass,
            closed: false
        }
    }

    checkedBox(event) {
        console.log(!this.state.closed);
        this.setState({
            closed: !this.state.closed
        })
    }

    render() {
        return (
            <div>
                <div className={`todo-item ${this.props.onHoldClass ? 'onHold' : ''}`}>

                    <ChoiceItem checkedItem={this.checkedBox.bind(this)}/>
                    {/*изначально стэйт фолс, по событию меняю на противоположный в функции, и в условии обратно*/}
                    {!this.state.closed
                        ? (<span>{this.props.items}</span>)
                        : (<span><strike>{this.props.items}</strike></span>)
                    }
                    <div className="controls">
                        <OnHoldControl onHold={this.props.onHold}/>
                        {/*понять как пропсами передавать функции что куда*/}
                        <DeleteControl
                            disabledDelete={this.state.closed}
                            deleteItem={this.props.onDeleteItems}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Item