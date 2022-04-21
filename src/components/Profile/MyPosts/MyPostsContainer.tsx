import React, {useState} from 'react';
import {addPostAC, updateNewPostTextAC} from "../../../redux/profileReducer";
import {MyPosts} from "./MyPosts";
import {ReduxStoreType} from "../../../redux/reduxStore";
// import StoreContext from "./StoreContext";
import StoreContext from "../../../StoreContext";


type MyPostsType = {}

export const MyPostsContainer = () => {


    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    let state = store.getState()

                    const addPost = () => {
                        if (state.profilePage.newPostText.trim()) {
                            store.dispatch(addPostAC(state.profilePage.newPostText));
                        }
                    }

                    const onPostChange = (text: string) => {
                        store.dispatch(updateNewPostTextAC(text));
                    }

                    return (
                        <MyPosts
                            updateNewPostText={onPostChange}
                            addPost={addPost}
                            posts={store.getState().profilePage.posts}
                            newPostText={store.getState().profilePage.newPostText}/>)

                }
            }
        </StoreContext.Consumer>
    );
};

