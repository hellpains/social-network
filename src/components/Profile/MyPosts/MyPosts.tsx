import React, {ChangeEvent, KeyboardEvent} from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import {
    ActionsTypes,
    addPostAC,
    PostType,
    updateNewPostTextAC,
} from "../../../redux/state";


type MyPostsType = {
    posts: Array<PostType>
    newPostText: string
    dispatch: (action: ActionsTypes) => void
    // updateNewPostText: (newPostText: string) => void
    // addPost: (postMessage: string) => void
}

export const MyPosts = (props: MyPostsType) => {

    const postsElement = props.posts.map(p => <Post key={p.id} message={p.message} likesCount={p.likesCount}/>)

    const onClickAddPostHandler = () => {
        if (props.newPostText.trim()) {
            // props.addPost(props.newPostText.trim())
            props.dispatch(addPostAC(props.newPostText));
        }

    }

    const onPostChange = (e: ChangeEvent<HTMLInputElement>) => {
        // props.updateNewPostText(e.currentTarget.value)
        props.dispatch(updateNewPostTextAC(e.currentTarget.value));
    }
    const addPostKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            onClickAddPostHandler()
        }
    }

    return (
        <div className={s.postsBlocks}>
            <h3>My posts</h3>
            <div>
                <div>
                    <input onChange={onPostChange}
                           value={props.newPostText}
                           onKeyPress={addPostKeyPressHandler}
                    />
                    <button onClick={onClickAddPostHandler}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElement}
            </div>
        </div>
    );
};

