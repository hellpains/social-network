import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './Navbar.module.css';
import {ChatBubbleOutline, Newspaper, PermIdentity, QueueMusic, Settings} from "@mui/icons-material";

export const Navbar = () => {
    const activeClassName = (params: any) => params.isActive ? s.active : '';

    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <PermIdentity style={{marginRight:'10px'}} color={'primary'}/>
                <NavLink className={activeClassName} to={'/profile'}>Profile</NavLink>
            </div>
            <div className={s.item}>
                <ChatBubbleOutline style={{marginRight:'10px'}} color={'primary'}/>
                <NavLink className={activeClassName} to={'/dialogs'}>Messages</NavLink>
            </div>
            <div className={s.item}>
                <Newspaper style={{marginRight:'10px'}} color={'primary'}/>
                <NavLink className={activeClassName} to={'/newss'}>News</NavLink>
            </div>
            <div className={`${s.item} ${s.active}`}>
                <QueueMusic style={{marginRight:'10px'}} color={'primary'}/>
                <NavLink className={activeClassName} to={'/music'}>Muic</NavLink>
            </div>
            <div className={s.item}>
                <Settings style={{marginRight:'10px'}} color={'primary'}/>
                <NavLink className={activeClassName} to={'/settings'}>Settings</NavLink>
            </div>
        </nav>
    );
};