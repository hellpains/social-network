import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './Navbar.module.css';
import {ChatBubbleOutline, Newspaper, People, PermIdentity, QueueMusic, Settings} from "@mui/icons-material";

export const Navbar = () => {
    const activeClassName = (params: any) => params.isActive ? s.active : '';

    return (
        <nav className={s.nav}>
            <NavLink  to={'/profile'} className={activeClassName}>
                <div className={s.item}>
                    <PermIdentity style={{marginRight:'10px'}} color={'primary'}/>
                    <div >Profile</div>
                </div>
            </NavLink>
            <NavLink  to={'/dialogs'} className={activeClassName}>
                <div className={s.item}>
                    <ChatBubbleOutline style={{marginRight:'10px'}} color={'primary'}/>
                    <div >Messages</div>
                </div>
            </NavLink>
            <NavLink  to={'/news'} className={activeClassName}>
                <div className={s.item}>
                    <Newspaper style={{marginRight:'10px'}} color={'primary'}/>
                    <div >News</div>
                </div>
            </NavLink>
            <NavLink  to={'/music'} className={activeClassName}>
                <div className={s.item}>
                    <QueueMusic style={{marginRight:'10px'}} color={'primary'}/>
                    <div >Music</div>
                </div>
            </NavLink>
            <NavLink  to={'/settings'} className={activeClassName}>
                <div className={s.item}>
                    <Settings style={{marginRight:'10px'}} color={'primary'}/>
                    <div >Settings</div>
                </div>
            </NavLink>
            <NavLink  to={'/users'} className={activeClassName}>
                <div className={s.item}>
                    <People style={{marginRight:'10px'}} color={'primary'}/>
                    <div >Users</div>
                </div>
            </NavLink>

        </nav>
    );
};