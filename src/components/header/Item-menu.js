import React from 'react';
import { NavLink } from  'react-router-dom';

class ItemMenu extends React.Component {

    constructor(props) {
        super(props);

        this.setActive = this.setActive.bind(this);
    }

    setActive() {
        // this.props.active = this.event.target;
    }

    render()
    {
        return (
            <li onClick={this.setActive}>
                <NavLink to={this.props.page} exact activeClassName="active">{this.props.page}</NavLink>
            </li>
        );
    }
}


export default ItemMenu;
