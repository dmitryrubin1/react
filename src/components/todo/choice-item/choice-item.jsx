import React from 'react'

class ChoiceItem extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {

        return (
            <div>
                <input
                    type='checkbox'
                    onChange={this.props.checkedItem}
                />
            </div>
        )
    }
}

export default ChoiceItem;