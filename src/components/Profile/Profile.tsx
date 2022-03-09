import React from 'react';
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ProfilePageType} from "../../redux/state";

type ProfileType={
    profilePage:ProfilePageType
    addPost:(postMessage:string)=>void
    updateNewPostText:(newPostText:string)=>void
}

export const Profile = (props:ProfileType) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={ props.profilePage.posts} newPostText={props.profilePage.newPostText} addPost={props.addPost} updateNewPostText={props.updateNewPostText}/>
        </div>
    );
};





