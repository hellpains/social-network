
//const type
import {Dispatch} from "redux";
import {profileAPI, usersAPI} from "../api/api";
import {setTotalUsersCountAC, setUsersAC, toggleIsFetchingAC} from "./usersReducer";
import {match} from "assert";

const ADD_POST = "ADD_POST"
const UPDATE_NEW_POST_TEXT = "UPDATE_NEW_POST_TEXT"
const SET_USER_PROFILE = "SET-USER-PROFILE"


export type PostType = {
    id: number
    message: string
    likesCount: number
    time: string
}

const initialState = {
    newPostText: "",
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 15, time: '21:00'},
        {id: 2, message: 'Ii\'s my first post', likesCount: 20, time: '11:00'}
    ] as Array<PostType>,
    profile: null
}
export type InitialStateType = typeof initialState

export const profileReducer = (state: InitialStateType = initialState, action: ProfileActionsType): InitialStateType => {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                posts: [{id: 10, message: state.newPostText, likesCount: 0, time: '15:00'}, ...state.posts],
                newPostText: ""
            }
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText
            }
        case SET_USER_PROFILE:
            return {...state, profile: action.profile}
        default:
            return state
    }
}


export type ProfileActionsType =
    ReturnType<typeof addPostAC>
    | ReturnType<typeof updateNewPostTextAC>
    | ReturnType<typeof setUserProfile>



// ACTION TYPE
export const addPostAC = () => {
    return {
        type: ADD_POST
    } as const
}
export const updateNewPostTextAC = (newText: string) => {
    return {
        type: UPDATE_NEW_POST_TEXT, newText
    } as const
}
export const setUserProfile = (profile: any) => {
    return {
        type: SET_USER_PROFILE,
        profile
    } as const
}


// THUNK TYPE
export const getUserTC = (userId:string) => (dispatch: Dispatch) => {
    profileAPI.getUser(userId)
        .then(data => {
            dispatch(setUserProfile(data))
        })
}