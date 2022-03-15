import React from 'react';
import s from './../Dialogs.module.css'

type MessageType = {
    message: string
}

export const Message = (props: MessageType) => {
    return (
        <div className={s.dialog}>{props.message}</div>
    )
}