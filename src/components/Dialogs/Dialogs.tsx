import React from 'react';
import s from './Dialogs.module.css';
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Dialogs";
import {MessageType} from "../../index";
import {AppType} from "../../App";
type DialogsType={
    dialogs:Array<DialogsType>
    message:Array<MessageType>
}
export const Dialogs = (props:AppType) => {
    let dialogsElement = props.dialogs.map(d => <DialogItem key={d.id} name={d.name} id={d.id}/>)
    let messageElement = props.message.map(m => <Message key={m.id} message={m.message}/>)

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


