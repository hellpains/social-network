const SEND_MESSAGE = "SEND-MESSAGE"

export type DialogType = {
    id: number
    name: string
}
export type MessageType = {
    id: number
    message: string
}

const initialState = {
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
    ] as Array<MessageType>
}

export type InitialStateType = typeof initialState


export const dialogsReducer = (state: InitialStateType = initialState, action: DialogsActionsType): InitialStateType => {
    switch (action.type) {
        case SEND_MESSAGE:
            return {
                ...state,
                messages: [
                    ...state.messages,
                    {id: 5, message: action.newMessageBody}
                ],
            }
        default:
            return state
    }
}


export type DialogsActionsType = ReturnType<typeof sendMessageAC>

export const sendMessageAC = (newMessageBody: string) => {
    return {
        type: SEND_MESSAGE,
        newMessageBody
    } as const
}
