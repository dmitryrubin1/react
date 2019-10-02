import React from 'react';
import './header.scss';
import ItemMenu from './Item-menu';

function Header() {

    return (
        <header className="header">
            <menu>
                <ul>
                    <ItemMenu active='active' page='Home'/>
                    <ItemMenu page='News'/>
                    <ItemMenu page='Todo'/>
                </ul>
            </menu>
            <br/>
        </header>
    );
}

export default Header;