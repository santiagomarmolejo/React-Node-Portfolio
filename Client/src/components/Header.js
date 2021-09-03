import React from 'react';
import style from './Header.module.css'

const Header = (props) => {
    return (<div>
        <header>
            <h2>Santiago Marmolejo</h2>
            <nav>
                <ul>
                    <a className= {style.nav_item} >Home</a>
                    <a className= {style.nav_item} >Photos</a>
                    <a className= {style.nav_item} >Contact</a>
                </ul>
            </nav>
        </header>
    </div>);
}

export default Header;