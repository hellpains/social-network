import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './Header.module.css';

type PropsType = {
    isAuth: boolean,
    login: string|null
    setAuthUserData: (userId: number, email: string, login: string) => void
}

export const Header = (props: PropsType) => {
    return (
        <header className={s.header}>
            <img
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS__d-ag5ZGjKWWC-j0okLJAQaqKwiuhAZcRw&usqp=CAU'/>

            <div className={s.loginBlock}>
                {props.isAuth ? props.login
                    : <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>
    );
};