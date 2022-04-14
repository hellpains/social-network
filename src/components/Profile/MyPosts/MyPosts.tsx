import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import {
    ActionsTypes,
    addPostAC,
    PostType,
    updateNewPostTextAC,
} from "../../../redux/state";
import {Box, Button, TextField} from "@mui/material";


type MyPostsType = {
    posts: Array<PostType>
    newPostText: string
    dispatch: (action: ActionsTypes) => void
    // updateNewPostText: (newPostText: string) => void
    // addPost: (postMessage: string) => void
}

export const MyPosts = (props: MyPostsType) => {
    let [error, serError] = useState('')
    const postsElement = props.posts.map(p => <Post key={p.id} message={p.message} likesCount={p.likesCount}/>)

    const onClickAddPostHandler = () => {
        if (props.newPostText.trim()) {
            // props.addPost(props.newPostText.trim())
            props.dispatch(addPostAC(props.newPostText));

        } else {
            serError('error')
        }

    }

    const onPostChange = (e: ChangeEvent<HTMLInputElement>) => {
        // props.updateNewPostText(e.currentTarget.value)
        serError('')
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
                <div >
                    <TextField
                        error={!!error}
                        label="Size"
                        id="standard-size-small"
                        helperText={error?"Incorrect entry.":''}
                        defaultValue="Small"
                        size="small"
                        variant="standard"
                        onChange={onPostChange}
                        value={props.newPostText}
                        onKeyPress={addPostKeyPressHandler}
                    />


                    <Button  style={{marginTop: '9px', marginLeft: '10px'}} variant={'outlined'}
                            onClick={onClickAddPostHandler}>publish</Button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElement}
            </div>
        </div>
    );
};

