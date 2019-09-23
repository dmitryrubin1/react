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
                    disabled={this.props.disabledCheck}
                />
            </div>
        )
    }
}

export default ChoiceItem;