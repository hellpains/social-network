import React, {useState} from 'react';
import {addMessageAC, updateNewMessageTextAC} from "../../redux/dialogsReducer";
import {ReduxStoreType} from "../../redux/reduxStore";
import {Dialogs} from "./Dialogs";
import StoreContext from "../../StoreContext";


type DialogsPropsType = {}

export const DialogsContainer = () => {


    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    let state = store.getState().dialogsPage

                    const onChangeTextHandler = (body: string) => {
                        store.dispatch(updateNewMessageTextAC(body));
                    }
                    const addMessage = () => {
                        if (state.newMessageText.trim()) {
                            store.dispatch(addMessageAC(state.newMessageText));
                        }
                    }
                    return (

                        <Dialogs
                            dialogsPage={state}
                            addMessage={addMessage}
                            newMessageText={state.newMessageText}
                            onChangeTextHandler={onChangeTextHandler}/>
                    )
                }
            }
        </StoreContext.Consumer>
    )

};
