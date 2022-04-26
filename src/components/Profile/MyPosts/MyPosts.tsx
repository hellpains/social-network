import React, {ChangeEvent, KeyboardEvent} from "react";
import styles from "./MyPosts.module.css"
import Post from "./Post/Post";
import {InitialStateType} from "../../../redux/profileReducer";
import {Button, TextField} from "@mui/material";

type PropsType = {
    profilePage: InitialStateType
    addPost: () => void
    updateNewPostText: (newText: string) => void
}

export const MyPosts = (props: PropsType) => {
    const onClickAddPostHandler = () => {
        props.addPost()
    }
    const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        const text = e.currentTarget.value
        props.updateNewPostText(text)
    }
    const onEnterPost = (e: KeyboardEvent<HTMLDivElement>) => {
        if (e.key === 'Enter') {
            onClickAddPostHandler()
        }
    }

    return (
        <div className={styles.postsWrapper}>
            <h3>My posts</h3>
            <div>
                <div>
                    <TextField
                        label="Size"
                        id="standard-size-small"
                        defaultValue="Small"
                        size="small"
                        variant="standard"
                        onChange={onPostChange}
                        value={props.profilePage.newPostText}
                        onKeyPress={onEnterPost}
                    />


                    <Button
                        style={{marginTop: '9px', marginLeft: '10px'}}
                        variant={'outlined'}
                        onClick={onClickAddPostHandler}
                    >
                        publish
                    </Button>
                </div>
            </div>

            <div className={styles.posts}>
                {props.profilePage.posts.map(el => {
                    return (
                        <Post key={el.id} message={el.message} likesCount={el.likesCount} time={el.time}/>
                    )
                })}
            </div>
        </div>
    )
}