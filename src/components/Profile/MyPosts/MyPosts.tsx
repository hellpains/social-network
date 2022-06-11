import React, {ChangeEvent, KeyboardEvent} from "react";
import styles from "./MyPosts.module.css"
import Post from "./Post/Post";
import {InitialStateType} from "../../../redux/profileReducer";
import {Button, TextField} from "@mui/material";
import {Field, reduxForm} from "redux-form";

type PropsType = {
    profilePage: InitialStateType
    addPost: (newPostText: string) => void
}

export const MyPosts = (props: PropsType) => {

    const onAddPost = (values: any) => {
        props.addPost(values.newPostText)
    }

    // const onClickAddPostHandler = () => {
    //     props.addPost()
    // }
    // const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    //     const text = e.currentTarget.value
    //     props.updateNewPostText(text)
    // }
    // const onEnterPost = (e: KeyboardEvent<HTMLDivElement>) => {
    //     if (e.key === 'Enter') {
    //         onClickAddPostHandler()
    //     }
    // }

    return (
        <div className={styles.postsWrapper}>
            <h3>My posts</h3>
            <AddPostFormRedux onSubmit={onAddPost}/>

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


const AddPostForm = (props: any) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={'textarea'} name={'newPostText'}/>
            </div>

            <div>
                <button>publish</button>
            </div>
        </form>
    );
};

const AddPostFormRedux = reduxForm({form: 'ProfileAddPostForm'})(AddPostForm)

