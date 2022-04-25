const SEND_MESSAGE = "SEND-MESSAGE"
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT"

export type DialogType = {
    id: number
    name: string
}
// export type MessageType = {
//     id: number
//     message: string
// }


const initialState = {
    newMessageText: "",
    dialogs: [
        {id: 1, name: 'Hellpains'},
        {id: 2, name: 'Xalifat'},
        {id: 3, name: 'pretty'},
        {id: 4, name: 'Oland'},
        {id: 5, name: 'hkmv'},
        {id: 6, name: 'rosul'},
    ] as Array<DialogType>,
    messages: [
        {id: 1, message: "How are you, Sasha?"},
        {id: 2, message: "Good. Are you?"},
        {id: 3, message: "Good"}
    ]
    // ] as Array<MessageType>
}
export type InitialStateType = typeof initialState

export const dialogsReducer = (state: InitialStateType = initialState, action: DialogsActionsType): InitialStateType => {
    switch (action.type) {
        case SEND_MESSAGE:
            return {
                ...state,
                messages: [...state.messages, {id: 5, message: state.newMessageText}],
                newMessageText: ""
            }
        case UPDATE_NEW_MESSAGE_TEXT:
            return {
                ...state,
                newMessageText: action.newText
            }
        default:
            return state
    }
}


export type DialogsActionsType = ReturnType<typeof sendMessageAC> | ReturnType<typeof updateNewMessageTextAC>

export const sendMessageAC = () => {
    return {
        type: SEND_MESSAGE
    } as const
}

export const updateNewMessageTextAC = (newText: string) => {
    return {
        type: UPDATE_NEW_MESSAGE_TEXT,
        newText
    } as const
}