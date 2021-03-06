import React from "react";
import styles from './Dialogs.module.css';
import {InitialStateType} from "../../redux/dialogsReducer";
import {Message} from "./Message/Dialogs";
import {DialogItem} from "./DialogItem/DialogItem";
import s from './Dialogs.module.css'
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../common/FormControls/FormControls";
import {maxLengthCreator, required} from "../../utils/validators/validators";
import {AddMessageFormRedux} from "./AddMessageForm/AddMessageForm";


type PropsType = {
    dialogsPage: InitialStateType
    sendMessage: (newMessageBody: string) => void
    updateNewMessageText: (newText: string) => void

}

export const Dialogs = (props: PropsType) => {
    const addNewMessage = (values: any) => {
        props.sendMessage(values.newMessageBody)
    }

    return (
        <div className={s.dialogs}>
            <div>
                <h3 className={s.title}>Dialogs</h3>
                {props.dialogsPage.dialogs.map(d => <DialogItem key={d.id} id={d.id} name={d.name}/>)}
            </div>
            <div className={s.messages}>
                <div className={s.messageItem}>
                    <h3 className={s.title}>Messages</h3>
                    {props.dialogsPage.messages.map(m => <Message key={m.id} message={m.message}/>)}
                </div>
                <AddMessageFormRedux onSubmit={addNewMessage}/>
            </div>
        </div>
    )
}


