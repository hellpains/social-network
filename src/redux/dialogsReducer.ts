import {ActionsTypes, StateType} from "./state";

const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';





export const dialogsReducer = (state: StateType, action: ActionsTypes) => {

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_TEXT:
            state.dialogsPage.newMessageText = action.body
            return state
        case ADD_MESSAGE:
            let body = state.dialogsPage.newMessageText;
            state.dialogsPage.newMessageText = '';
            state.dialogsPage.messages.push({id: 6, message: body})
            return state
        default:
            return state
    }
}



export const addMessageAC = (newMessageText: string) => ({type: ADD_MESSAGE, messageText: newMessageText} as const)
export const updateNewMessageTextAC = (body: string) => ({type: UPDATE_NEW_MESSAGE_TEXT, body: body} as const)