import React, {  useState} from 'react';
import {addPostAC, updateNewPostTextAC} from "../../../redux/profileReducer";
import {MyPosts} from "./MyPosts";
import {ReduxStoreType} from "../../../redux/reduxStore";


type MyPostsType = {
    store:ReduxStoreType
}

export const MyPostsContainer = (props: MyPostsType) => {
    let state=props.store.getState()

    let [error, serError] = useState('')

    const addPost = () => {
        if (state.profilePage.newPostText.trim()) {
            // props.addPost(props.newPostText.trim())
            props.store.dispatch(addPostAC(state.profilePage.newPostText));

        } else {
            serError('error')
        }
    }

    const onPostChange = (text:string) => {
        serError('')
        props.store.dispatch(updateNewPostTextAC(text));
    }

    return (
        <MyPosts
            updateNewPostText={onPostChange}
            addPost={addPost}
            posts={state.profilePage.posts}
            newPostText={state.profilePage.newPostText}/>
    );
};

