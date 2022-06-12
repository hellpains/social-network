import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './Header.module.css';

type PropsType = {
    isAuth: boolean,
    login: string | null
    logout:()=>void
}

export const Header = (props: PropsType) => {
    return (
        <header className={s.header}>
            <img
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS__d-ag5ZGjKWWC-j0okLJAQaqKwiuhAZcRw&usqp=CAU'/>

            <div className={s.loginBlock}>
                {props.isAuth
                    ? <div>{props.login} - <button onClick={props.logout}>Logout</button></div>
                    : <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>
    );
};