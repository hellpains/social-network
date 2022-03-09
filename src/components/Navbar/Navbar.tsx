import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './Navbar.module.css';

const Navbar = () => {
    const setActive = (navData: any) => navData.isActive ? s.active : '';
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink className={setActive} to={'/profile'}>Profile</NavLink>
            </div>
            <div className={s.item}>
                <NavLink className={setActive} to={'/dialogs'}>Messages</NavLink>
            </div>
            <div className={s.item}>
                <NavLink className={setActive} to={'/newss'}>News</NavLink>
            </div>
            <div className={`${s.item} ${s.active}`}>
                <NavLink className={setActive} to={'/music'}>Music</NavLink>
            </div>
            <div className={s.item}>
                <NavLink className={setActive} to={'/settings'}>Settings</NavLink>
            </div>
        </nav>
    );
};

export default Navbar;