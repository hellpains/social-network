import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import s from './Dialogs.module.css';
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Dialogs";
import {
    DialogsPageType,
} from "../../redux/state";
import {Button, TextField} from "@mui/material";

type DialogsPropsType = {
    dialogsPage: DialogsPageType
    addMessage:any
    newMessageText:string
    onChangeTextHandler:(body:string)=>void
}

export const Dialogs = (props: DialogsPropsType) => {
    let [error, serError] = useState('')
    let dialogsElement = props.dialogsPage.dialogs.map(d => <DialogItem key={d.id} name={d.name} id={d.id}/>)
    let messageElement = props.dialogsPage.messages.map(m => <Message key={m.id} message={m.message}/>)


    const onChangeTextHandler = (e: ChangeEvent<HTMLInputElement>) => {
        serError('')
        props.onChangeTextHandler(e.currentTarget.value)
    }
    const onClickAddMessageHandler = () => {
        if (props.dialogsPage.newMessageText.trim()) {
            props.addMessage(props.newMessageText.trim())
        } else {
            serError('error')
        }
    }
    const addPostKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            onClickAddMessageHandler()
        }
    }

    return (
        <div className={s.dialogs}>
            <div>
                {dialogsElement}
            </div>
            <div className={s.messages}>
                {messageElement}
                <div className={s.buttonAndInput}>
                    <TextField
                        error={!!error}
                        label="Size"
                        id="standard-size-small"
                        helperText={error ? "Incorrect entry." : ''}
                        defaultValue="Small"
                        size="small"
                        variant="standard"
                        value={props.dialogsPage.newMessageText}
                        onChange={onChangeTextHandler}
                        onKeyPress={addPostKeyPressHandler}
                    />
                    <Button
                        style={{marginTop: '9px', marginLeft: '10px'}}
                        variant={'outlined'}
                        onClick={onClickAddMessageHandler}
                    >send</Button>
                </div>
            </div>

        </div>
    );
};
