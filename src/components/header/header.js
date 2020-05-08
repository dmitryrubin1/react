import React from 'react';
import './header.scss';
import ItemMenu from './Item-menu';

const Header = (props) => {
    // console.log(props);
    return (
        <header className="header">
            <br/>
            <menu>
                <ul>
                    <ItemMenu page='New-todo'/>
                    <ItemMenu page='Tours'/>
                    <ItemMenu page='Todo'/>
                </ul>
            </menu>
            <br/>
        </header>
    );
}

export default Header;