import React from 'react';
import { NavLink } from  'react-router-dom';

const ItemMenu = (props) => {
    return (
        <li>
            <NavLink to={props.page} exact activeStyle={{color: '#f2720c'}}>{props.page}</NavLink>
        </li>
    );
}


export default ItemMenu;
