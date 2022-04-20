import {ActionsTypes, PostType, ProfilePageType, StateType} from "./state";
import {addMessageAC, updateNewMessageTextAC} from "./dialogsReducer";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';


let initialState={
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 15,time:'21:00'},
        {id: 2, message: 'Ii\'s my first post', likesCount: 20,time:'11:00'}
    ],
    newPostText: 'it-kamasutra.com'
}



export const profileReducer = (state: ProfilePageType=initialState, action: ActionsTypes) => {

    switch (action.type) {
        case ADD_POST:
            let newPost: PostType = {
                id: 5,
                message: action.postMessage,
                likesCount: 0,
                time:'7:00'
            }
            state.posts.unshift(newPost)
            state.newPostText = '';
            return state
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newPostText
            return state
        default:
            return state
    }

}


export const addPostAC = (newPostText: string) => ({type: ADD_POST, postMessage: newPostText} as const)
export const updateNewPostTextAC = (postText: string) => ({type: UPDATE_NEW_POST_TEXT, newPostText: postText} as const)