const SET_USER_DATA = "SET-USER-DATA"


const initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth:false
}

export type InitialStateType = {
    userId:null|number
    email:null|string
    login:null|string
    isAuth:boolean
}


export const authReducer = (state: InitialStateType = initialState, action: DialogsActionsType): InitialStateType => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth:true
            }

        default:
            return state
    }
}


export type DialogsActionsType = ReturnType<typeof setAuthUserData>

export const setAuthUserData = (userId:number,email:string,login:string) => {
    return {
        type: SET_USER_DATA,
        data:{
            userId,
            email,
            login
        }
    } as const
}

