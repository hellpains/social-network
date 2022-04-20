import {ActionsTypes, DialogsPageType, StateType} from "./state";

const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';



let initialState={
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How is your it-kamasutra'},
        {id: 3, message: 'Yo'},
        {id: 4, message: 'Yo'},
        {id: 5, message: 'Yo'},
    ],
    dialogs: [
        {id: 1, name: 'Hellpains'},
        {id: 2, name: 'Xalifat'},
        {id: 3, name: 'pretty'},
        {id: 4, name: 'Oland'},
        {id: 5, name: 'hkmv'},
        {id: 6, name: 'rosul'},
    ],
    newMessageText: ''
}


export const dialogsReducer = (state: DialogsPageType = initialState, action: ActionsTypes) => {

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.body
            return state
        case ADD_MESSAGE:
            let body = state.newMessageText;
            state.newMessageText = '';
            state.messages.push({id: 6, message: body})
            return state
        default:
            return state
    }
}



export const addMessageAC = (newMessageText: string) => ({type: ADD_MESSAGE, messageText: newMessageText} as const)
export const updateNewMessageTextAC = (body: string) => ({type: UPDATE_NEW_MESSAGE_TEXT, body: body} as const)