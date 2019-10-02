import React from 'react';

class Input extends React.Component {
    constructor(props){
        super(props);
        console.log(this.props);

        this.state = {
            name: ''
        }
    }

    itemName = (e) => {
         this.props.onValueChange(
             this.setState({
                 name: this.state.name
             })
         )
    }

    render () {
        return (

                <input
                    onChange={this.itemName}
                    value={this.props.value}
                />
        );
    }
}

export default Input