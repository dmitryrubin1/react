import React from 'react'
import CloseIcon from '@material-ui/icons/Close';

class DeleteItem extends React.Component {

    render() {
        console.log(this.props);
        return (
            <button
                disabled={this.props.disabledDelete}
                onClick={this.props.deleteItem}>
                <CloseIcon/>
            </button>
        )
    }
}

export default DeleteItem