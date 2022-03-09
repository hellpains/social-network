import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

export const Dialogs = () => {
    return (
        <div className={s.dialogs} >
            <div className={s.dialogsItems}>
                <div className={`${s.dialog} ${s.active}`}>
                    <NavLink to={'/dialogs/1'}>hellpains</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to={'/dialogs/2'}> Xalifat</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to={'/dialogs/3'}> pretty</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to={'/dialogs/4'}> Oland</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to={'/dialogs/5'}> hkmv</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to={'/dialogs/6'}> rosul</NavLink>
                </div>

            </div>
            <div className={s.messages}>
                <div className={s.message}>Hi</div>
                <div className={s.message}>How is your it-kamasutra</div>
                <div className={s.message}>Yo</div>
            </div>
        </div>
    );
};
