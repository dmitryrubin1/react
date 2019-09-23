import React from 'react'
import DeleteControl from "../delete-control/delete-controls";
import ChoiceItem from "../choice-item/choice-item";
import OnHoldControl from "../onHold-control/onHold-contols";

class Item extends React.Component {
    /*нужно ли в каждом компоненте присваивать переменную пропсам и стейту типо const item = this.props и дальше использовать ее item.close например*/

    constructor(props) {
        super(props)
        console.log('item');
        console.log(this.props);

        this.state = {
            onHold: false,
            closed: false
        }
    }

    checkedBox(event) {
        this.setState({
            closed: !this.state.closed,
        })
    }

    onHoldItem(func) {
        this.setState({
            onHold: !this.state.onHold,
        });
    }

    render() {
        return (
            <div>
                <div className={`todo-item ${this.state.onHold ? 'onHold' : ''}`}>
                    <ChoiceItem
                        disabledCheck={this.state.onHold}
                        checkedItem={this.checkedBox.bind(this)}/>
                    {/*изначально стэйт фолс, по событию меняю на противоположный в функции, и в условии обратно*/}
                    {!this.state.closed
                        ? (<span>{this.props.items}</span>)
                        : (<span><strike>{this.props.items}</strike></span>)
                    }
                    <div className="controls">
                        <OnHoldControl
                            onHold={this.onHoldItem.bind(this)}
                            disabledOnHold={this.state.closed}/>
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