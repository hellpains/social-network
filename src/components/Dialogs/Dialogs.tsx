import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import s from './Dialogs.module.css';
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Dialogs";
import {
    ActionsTypes,
    DialogsPageType,
} from "../../redux/state";
import {Button, TextField} from "@mui/material";
import {addMessageAC, updateNewMessageTextAC} from "../../redux/dialogsReducer";

type DialogsPropsType = {
    dialogsPage: DialogsPageType
    dispatch: (action: ActionsTypes) => void
}

export const Dialogs = (props: DialogsPropsType) => {
    let [error, serError] = useState('')
    let dialogsElement = props.dialogsPage.dialogs.map(d => <DialogItem key={d.id} name={d.name} id={d.id}/>)
    let messageElement = props.dialogsPage.messages.map(m => <Message key={m.id} message={m.message}/>)


    // const onChangeTextHandler = (e: ChangeEvent<HTMLInputElement>) => {
    //     props.dispatch(updateNewPostTextAC(e.currentTarget.value));
    //     setAdd(e.currentTarget.value)
    // }
    const onChangeTextHandler = (e: ChangeEvent<HTMLInputElement>) => {
        serError('')
        props.dispatch(updateNewMessageTextAC(e.currentTarget.value));
    }
    const onClickAddMessageHandler = () => {
        if (props.dialogsPage.newMessageText.trim()) {
            // props.addPost(props.newPostText.trim())
            props.dispatch(addMessageAC(props.dialogsPage.newMessageText));
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
