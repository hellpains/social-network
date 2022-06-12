import {Dispatch} from "redux";
import {authAPI} from "../api/api";

const SET_USER_DATA = "SET-USER-DATA"


const initialState = {
    userId: null as null | number,
    email: null as null | string,
    login: null as null | string,
    isAuth: false
}

export type InitialStateType = typeof initialState

export const authReducer = (state: InitialStateType = initialState, action: DialogsActionsType): InitialStateType => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload,
            }

        default:
            return state
    }
}

export type DialogsActionsType = ReturnType<typeof setAuthUserDataAC>

// ACTION CREATE
export const setAuthUserDataAC = (userId: number, email: string, login: string, isAuth: boolean) =>
    ({type: SET_USER_DATA, payload: {userId, email, login, isAuth}} as const)


// THUNK CREATE
export const getAuthUserData = () => (dispatch: Dispatch) => {
    authAPI.me()
        .then(res => {
            if (res.data.resultCode === 0) {
                const {id, email, login} = res.data.data
                dispatch(setAuthUserDataAC(id, email, login, true))

            }
        })
}

export const login = (email: any, password: any, rememberMe: any) => (dispatch: Dispatch) => {
    authAPI.login(email, password, rememberMe)
        .then(res => {
            if (res.data.resultCode === 0) {
                // @ts-ignore
                dispatch(getAuthUserData())

            }
        })
}

export const logout = () => (dispatch: Dispatch) => {
    authAPI.logout()
        .then(res => {
            if (res.data.resultCode === 0) {
                // @ts-ignore
                dispatch(setAuthUserDataAC(null, null, null, false))
            }
        })
}




















