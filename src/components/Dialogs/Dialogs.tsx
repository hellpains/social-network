import React, {ChangeEvent, KeyboardEvent,useState} from "react";
import styles from './Dialogs.module.css';
import {InitialStateType} from "../../redux/dialogsReducer";
import {Button, TextField} from "@mui/material";
import {Message} from "./Message/Dialogs";
import {DialogItem} from "./DialogItem/DialogItem";
import s from './Dialogs.module.css'
import {Redirect} from "react-router-dom";

type PropsType = {
    dialogsPage: InitialStateType
    sendMessage: () => void
    updateNewMessageText: (newText: string) => void

}

export const Dialogs = (props: PropsType) => {

    let [error, serError] = useState('')

    const sendMessageHandler = () => {
        props.sendMessage()
    }
    const updateNewMessageTextHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        const text = e.currentTarget.value
        props.updateNewMessageText(text)
    }
    const onEnterSend = (e:KeyboardEvent<HTMLDivElement>) => {
        if (e.key === "Enter") {
            sendMessageHandler()
        }
    }

    // if(!props.isAuth) return <Redirect to={"/login"}/>

    return (
        <div className={s.dialogs}>
            <div >
                <h3 className={s.title}>Dialogs</h3>
                {props.dialogsPage.dialogs.map(d => <DialogItem key={d.id} id={d.id} name={d.name}/>)}
            </div>
            <div className={s.messages}>
                <div className={s.messageItem}>
                    <h3 className={s.title}>Messages</h3>
                    {props.dialogsPage.messages.map(m => <Message key={m.id} message={m.message}/>)}
                </div>
                <div className={s.sendMessageForm}>
                    <TextField
                        style={{width: '700px',}}
                        error={!!error}
                        id="standard-size-small"
                        helperText={error ? "Incorrect entry." : ''}
                        placeholder="Message..."
                        onChange={updateNewMessageTextHandler}
                        value={props.dialogsPage.newMessageText}
                        size="small"
                        variant="standard"
                        onKeyPress={onEnterSend}
                    />
                    <Button
                        onClick={sendMessageHandler}
                        style={{marginTop: '-5px', marginLeft: '10px'}}
                        variant={'outlined'}
                    >
                        Send
                    </Button>
                </div>
            </div>
        </div>
    )
}