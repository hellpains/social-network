import React, {ChangeEvent, useState} from 'react';
import s from './Dialogs.module.css';
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Dialogs";
import {DialogsPageType} from "../../redux/state";

type DialogsPropsType={
    dialogsPage:DialogsPageType
}

export const Dialogs = (props:DialogsPropsType) => {
    let [add,setAdd]=useState('')
    let dialogsElement = props.dialogsPage.dialogs.map(d => <DialogItem key={d.id} name={d.name} id={d.id}/>)
    let messageElement = props.dialogsPage.messages.map(m => <Message key={m.id} message={m.message}/>)


    const onChangeTextHandler = (e:ChangeEvent<HTMLInputElement>) => {
        setAdd(e.currentTarget.value)
    }
    const onClickAddMessageHandler = () => {
        if(add.length>0){
            alert(add)
            setAdd('')
        }
    }


    return (
        <div className={s.dialogs}>
            <div>
                {dialogsElement}
            </div>
            <div className={s.messages}>
                {messageElement}
                <input value={add} onChange={onChangeTextHandler} />
                <button onClick={onClickAddMessageHandler}>Add post</button>
            </div>

        </div>
    );
};
