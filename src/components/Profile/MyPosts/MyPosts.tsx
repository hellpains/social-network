import React from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import {ProfileType} from "../Profile";

type MyPostsType={
    myPosts:Array<ProfileType>
}
export const MyPosts = (props:MyPostsType) => {

    let postsElement=props.myPosts.map(p=> <Post message={p.message} likeCount={p.likesCount} /> )
    return (
        <div className={s.postsBlocks}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElement}
            </div>
        </div>
    );
};
