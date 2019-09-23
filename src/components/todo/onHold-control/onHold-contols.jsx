import React from 'react'
import PauseIcon from '@material-ui/icons/Pause';

class OnHoldControl extends React.Component {

    render() {
    console.log('on hold');
    console.log(this.props);
        return (
            <button
                onClick={this.props.onHold}
                disabled={this.props.disabledOnHold}>
                <PauseIcon/>
            </button>
        )
    }
}

export default OnHoldControl