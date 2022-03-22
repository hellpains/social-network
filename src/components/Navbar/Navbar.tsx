import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './Navbar.module.css';

const Navbar = () => {
    const activeClassName = (navData: any) => navData.isActive ? s.active : '';

    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink className={activeClassName} to={'/profile'}>Profile</NavLink>
            </div>
            <div className={s.item}>
                <NavLink className={activeClassName} to={'/dialogs'}>Messages</NavLink>
            </div>
            <div className={s.item}>
                <NavLink className={activeClassName} to={'/newss'}>News</NavLink>
            </div>
            <div className={`${s.item} ${s.active}`}>
                <NavLink className={activeClassName} to={'/music'}>Muic</NavLink>
            </div>
            <div className={s.item}>
                <NavLink className={activeClassName} to={'/settings'}>Settings</NavLink>
            </div>
        </nav>
    );
};

export default Navbar;