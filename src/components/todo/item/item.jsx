import React from 'react'
import DeleteItem from "../delete-item/delete-item";
import ChoiceItem from "../choice-item/choice-item";
import EditItem from "../edit-controls/edit-contols";

class Item extends React.Component {


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
                        {/*не пойму как я могу воспользоваться  сменой статуса*/}
                        <EditItem onHold={this.props.onHold}/>
                        {/*вот тут надо понять как пропсами передавать функции что куда*/}
                        <DeleteItem
                            disabledDelete={this.state.closed}
                            deleteItem={this.props.deleteItems}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Item