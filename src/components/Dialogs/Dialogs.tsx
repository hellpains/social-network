import React from 'react';
import s from './Dialogs.module.css'

export const Dialogs = () => {
    return (
        <div className={s.dialogs} >
            <div className={s.dialogsItems}>
                <div className={`${s.dialog} ${s.active}`}>
                    hellpains
                </div>
                <div className={s.dialog}>
                    Xalifat
                </div>
                <div className={s.dialog}>
                    pretty
                </div>
                <div className={s.dialog}>
                    Oland
                </div>
                <div className={s.dialog}>
                    hkmv
                </div>
                <div className={s.dialog}>
                    rosul
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
