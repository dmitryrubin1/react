import React from 'react';
import './header.scss';
import ItemMenu from './Item-menu';

function Header() {

    return (
        <header className="header">
            <h3>Todo list</h3>
            <menu>
                <ul>
                    <ItemMenu active='active' page='Home'/>
                    <ItemMenu page='News'/>
                    <ItemMenu page='Contact'/>
                </ul>
            </menu>
            <br/>
        </header>
    );
}

export default Header;