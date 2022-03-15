import React from 'react';
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
export type ProfileType={
    id:number
    message:string
    likesCount:number

}
export const Profile = () => {
    let postsData=[
        {id:1,message:'Hi, how are you?',likesCount:15},
        {id:2,message:'Ii\'s my first post',likesCount:20}
    ]
    return (
        <div>
            <ProfileInfo/>
            <MyPosts myPosts={postsData}/>
        </div>
    );
};





