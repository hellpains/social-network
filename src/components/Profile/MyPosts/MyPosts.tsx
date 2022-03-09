import React from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div>
            My posts
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <div className={s.posts}>
                <Post message={'Hi, how are you?'} likeCount={15} nickname={'hellpains'}/>
                <Post message={'Ii\'s my first post'} likeCount={20} nickname={'sfdsddf'}/>
            </div>
        </div>
    );
};

export default MyPosts;