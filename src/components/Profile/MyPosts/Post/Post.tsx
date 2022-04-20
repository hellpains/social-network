import React from 'react';
import s from "./Post.module.css";
import {Avatar, Button, Checkbox} from "@mui/material";
import {Favorite, FavoriteBorder} from "@mui/icons-material";

type PostType = {
    message: string
    likesCount: number
    key: number
    time:string
}

const Post = (props: PostType) => {
    return (
        <div key={props.key} className={s.item}>
            <div className={s.title}>
                <Avatar src='./../../../../img/4213460-account-avatar-head-person-profile-user_115386.png'/>
                <div className={s.post}>
                    <span className={s.text}>{props.message}</span>
                    <div className={s.timeCountReply}>
                        <div className={s.time}>{props.time}</div>
                        <div className={s.likeCount}>
                            {props.likesCount} <Checkbox color={"error"}  style={{margin:'-10px'}} icon={<FavoriteBorder/>} checkedIcon={<Favorite/>}/>
                        </div>
                        <Button color={'inherit'} size={'small'} style={{margin:'-10px'}} variant="text">Reply</Button>
                        {/*<div className={s.Reply}>Reply</div>*/}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Post;