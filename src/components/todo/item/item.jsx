import React from 'react'
import PauseIcon from '@material-ui/icons/Pause';
import CloseIcon from '@material-ui/icons/Close';

class Item extends React.Component {
    /*нужно ли в каждом компоненте присваивать переменную пропсам и стейту типо const item = this.props и дальше использовать ее item.close например*/

    constructor(props) {
        super(props)
        console.log(this.props);
    }

    render() {
        return (
            <div>
                <div className={`todo-item ${this.props.onHoldItems ? 'onHold' : ''}`}>
                    <input
                        type='checkbox'
                        onChange={this.props.checkedItems}
                    />
                    {!this.props.checkedItems
                        ? (<span>{this.props.items}</span>)
                        : (<span><strike>{this.props.items}</strike></span>)
                    }
                    <div className="controls">
                        <button onClick={this.props.onHoldItems}>
                            <PauseIcon/>
                        </button>
                        <button onClick={this.props.onDeleteItems}>
                            <CloseIcon/>
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Item