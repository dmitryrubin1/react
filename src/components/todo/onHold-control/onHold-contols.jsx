import React from 'react'
import PauseIcon from '@material-ui/icons/Pause';

class OnHoldControl extends React.Component {

    render() {
    console.log(this.props);
        return (
            <button onClick={this.props.onHold}>
                <PauseIcon/>
            </button>
        )
    }
}

export default OnHoldControl