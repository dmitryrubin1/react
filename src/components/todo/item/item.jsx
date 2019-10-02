import React from 'react'
import PauseIcon from '@material-ui/icons/Pause';
import CloseIcon from '@material-ui/icons/Close';

class Item extends React.Component {
    constructor(props) {
        super(props)
        console.log(this.props);

        this.state = {
            checked: false,
            onHold: false
        }
    }

    selectedItem = (event) => {

        //Если использую callback, у родителя в консоле приходит значение стейта, но ругается линтер use setState
        // и как вернуть props обратно в компонент?

        // this.props.checkedItem(event.target.checked);

        //Eсли использую setState в callback - приходит undefined и получается я использую стэйт внутренний
        //И получается что Item должен был быть stateless а получается что во всех условия я использую state

        this.props.checkedItem(
            this.setState({
                checked: event.target.checked
            })
        )
    }

    pauseItem = (fn) => {
        this.props.onHoldItems(this.state.onHold);

        this.setState({
            onHold: !this.state.onHold
        })
    }

    render() {
        return (
            <div>
                <div className={`todo-item ${this.state.onHold ? 'onHold' : ''}`}>
                    <input
                        type='checkbox'
                        onChange={this.selectedItem}
                        disabled={this.state.onHold}
                    />
                    {!this.state.checked
                        ? (<span>{this.props.items}</span>)
                        : (<span><strike>{this.props.items}</strike></span>)
                    }
                    <div className="controls">
                        <button
                            onClick={this.pauseItem}
                            disabled={this.state.checked}
                        >
                            <PauseIcon/>
                        </button>
                        <button
                            onClick={this.props.onDeleteItems}
                            disabled={!this.state.checked}
                        >
                            <CloseIcon/>
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Item