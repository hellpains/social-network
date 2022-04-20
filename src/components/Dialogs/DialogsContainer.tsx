import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import s from './Dialogs.module.css';
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Dialogs";
import {Button, TextField} from "@mui/material";
import {addMessageAC, updateNewMessageTextAC} from "../../redux/dialogsReducer";
import {ReduxStoreType} from "../../redux/reduxStore";
import {Dialogs} from "./Dialogs";

type DialogsPropsType = {
    store: ReduxStoreType
}

export const DialogsContainer = (props: DialogsPropsType) => {

    let state = props.store.getState().dialogsPage

    let [error, serError] = useState('')


    const onChangeTextHandler = (body:string) => {
        serError('')
        props.store.dispatch(updateNewMessageTextAC(body));
    }
    const addMessage = () => {
        if (state.newMessageText.trim()) {
            props.store.dispatch(addMessageAC(state.newMessageText));
        } else {
            serError('error')
        }
    }


    return <Dialogs
        dialogsPage={state}
        addMessage={addMessage}
        newMessageText={state.newMessageText}
        onChangeTextHandler={onChangeTextHandler}/>
};
