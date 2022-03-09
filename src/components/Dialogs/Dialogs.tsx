import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";
type DialogItemType = {
    name: string
    id: number
}
type MessageType = {
    message: string
}

export const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>

                <DialogItem name={'Hellpains'} id={1}/>
                <DialogItem name={'Xalifat'} id={2}/>
                <DialogItem name={'pretty'} id={3}/>
                <DialogItem name={'Oland'} id={4}/>
                <DialogItem name={'hkmv'} id={5}/>
                <DialogItem name={'rosul'} id={6}/>
            </div>
            <div className={s.messages}>
                <Message message={'Hi'}/>
                <Message message={'How is your it-kamasutra'}/>
                <Message message={'Yo'}/>
            </div>
        </div>
    );
};


export const DialogItem = (props: DialogItemType) => {
    let path = '/dialogs/' + props.id
    return (
        <div className={`${s.dialog} ${s.active}`}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}



const Message = (props: MessageType) => {
    return (
        <div className={s.dialog}>{props.message}</div>
    )
}