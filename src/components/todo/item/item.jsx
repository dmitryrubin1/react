import React from 'react'
import PauseIcon from '@material-ui/icons/Pause';
import CloseIcon from '@material-ui/icons/Close';

class Item extends React.Component {
    constructor(props) {
        super(props)
        console.log(this.props);
    }

    render() {
        return (
            <div>
                <div className={`todo-item ${this.props.onHold ? 'onHold' : ''}`}>
                    <input
                        type='checkbox'
                        onChange={this.props.checkedItem}
                        defaultChecked={this.props.checkedItem}
                    />

                    {!this.props.checkedItem
                        ? (<span>{this.props.items}</span>)
                        : (<span><strike>{this.props.items}</strike></span>)
                    }
                    <div className="controls">
                        <button
                            onClick={this.props.onHold}
                            disabled={this.props.checked}>
                            <PauseIcon/>
                        </button>

                        <button
                            disabled={!this.props.checkedItem}
                            onClick={this.props.onDeleteItems}>
                            <CloseIcon/>
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Item