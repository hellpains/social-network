import React from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";

export const MyPosts = () => {
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
                <Post message={'Hi, how are you?'} likeCount={15} nickname={'hellpains'}/>
                <Post message={'Ii\'s my first post'} likeCount={20} nickname={'sfdsddf'}/>
            </div>
        </div>
    );
};
