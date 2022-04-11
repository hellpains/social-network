import React from 'react';
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ActionsTypes, ProfilePageType, store} from "../../redux/state";

type ProfileType = {
    profilePage: ProfilePageType
    // addPost:(postMessage:string)=>void
    // updateNewPostText:(newPostText:string)=>void
    dispatch: (action: ActionsTypes) => void
}

export const Profile = (props: ProfileType) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts
                posts={props.profilePage.posts}
                newPostText={props.profilePage.newPostText}
                dispatch={props.dispatch}
            />
        </div>
    );
};


// ({type:'ADD-POST',postMessage:props.M})

