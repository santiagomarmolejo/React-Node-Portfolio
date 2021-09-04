import React from 'react';
import style from './Header.module.css'
import { NavLink } from 'react-router-dom'


const Header = (props) => {
    return (<div>
        <header>
            <h2>Santiago Marmolejo</h2>
            <nav>
                <ul>
                    <NavLink to="/" className={style.nav_item} activeClassName="active">Home</NavLink>
                    <NavLink to="/photos" className={style.nav_item} activeClassName="active">Photos</NavLink>
                    <NavLink to="/contact" className={style.nav_item} activeClassName="active">Contact</NavLink>
                </ul>
            </nav>
        </header>
    </div>);
}

export default Header;