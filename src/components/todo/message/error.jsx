import React from 'react';

class ErrorMessage extends React.Component {

    render() {
        return (
            <div className={'message ' + this.props.class}>{this.props.text}</div>
        )
    }
}

export default ErrorMessage