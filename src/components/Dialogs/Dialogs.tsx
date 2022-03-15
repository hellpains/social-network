import React from 'react';
import s from './Dialogs.module.css';
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Dialogs";

export const Dialogs = () => {

    let dialogs = [
        {id: 1, name: 'Hellpains'},
        {id: 2, name: 'Xalifat'},
        {id: 3, name: 'pretty'},
        {id: 4, name: 'Oland'},
        {id: 5, name: 'hkmv'},
        {id: 6, name: 'rosul'},
    ]
    let message = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How is your it-kamasutra'},
        {id: 3, message: 'Yo'},
        {id: 4, message: 'Yo'},
        {id: 5, message: 'Yo'},
    ]
    

    let dialogsElement = dialogs.map(d => <DialogItem key={d.id} name={d.name} id={d.id}/>)
    let messageElement = message.map(m => <Message key={m.id} message={m.message}/>)

    return (
        <div className={s.dialogs}>
            <div>
                {dialogsElement}
            </div>
            <div className={s.messages}>
                {messageElement}
            </div>
        </div>
    );
};


