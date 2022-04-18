import {ActionsTypes, PostType, StateType} from "./state";
import {addMessageAC, updateNewMessageTextAC} from "./dialogsReducer";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';






export const profileReducer = (state: StateType, action: ActionsTypes) => {

    switch (action.type) {
        case ADD_POST:
            let newPost: PostType = {
                id: 5,
                message: action.postMessage,
                likesCount: 0
            }
            state.profilePage.posts.unshift(newPost)
            state.profilePage.newPostText = '';
            return state
        case UPDATE_NEW_POST_TEXT:
            state.profilePage.newPostText = action.newPostText
            return state
        default:
            return state
    }

}


export const addPostAC = (newPostText: string) => ({type: ADD_POST, postMessage: newPostText} as const)
export const updateNewPostTextAC = (postText: string) => ({type: UPDATE_NEW_POST_TEXT, newPostText: postText} as const)