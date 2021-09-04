import React from 'react';
import style from './Header.module.css'
import { NavLink } from 'react-router-dom'


const Header = (props) => {
    return (<div>
        <header>
            <h2>Santiago Marmolejo</h2>
            <nav>
                <ul>
                    <NavLink to="/" className={style.nav_item} activeClassName= { style.active } exact>Home</NavLink>
                    <NavLink to="/photos" className={style.nav_item} activeClassName= { style.active } exact>Photos</NavLink>
                    <NavLink to="/contact" className={style.nav_item} activeClassName= { style.active } exact>Contact</NavLink>
                    <NavLink to="/insert" className={style.nav_item} activeClassName= { style.active } exact>Insertar</NavLink>
                </ul>
            </nav>
        </header>
    </div>);
}

export default Header;