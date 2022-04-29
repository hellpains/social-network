import React from 'react'
import s from './Users.module.css'
import {InitialStateType, UserType} from "../../redux/usersReducer";
import {Button} from "@mui/material";
import axios from "axios";

// @ts-ignore
import userPhoto from '../../assets/images/206853.png'

type UsersType = {
    usersPage: InitialStateType
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: Array<UserType>) => void
}

export let Users = (props: UsersType) => {
    if (props.usersPage.users.length === 0) {
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
            props.setUsers(response.data.items)
        })
    }


    return (
        <div>
            {props.usersPage.users.map(u => {
                return (
                    <div key={u.id}>
                        <span>
                            <div>
                                <img src={ u.photos.small != null ? u.photos.small : userPhoto} alt="" className={s.userPhoto}/>
                            </div>
                            <div>
                                {u.followed
                                    ? <Button onClick={() => {
                                        props.unfollow(u.id)
                                    }} variant={'contained'}>unfollow</Button>
                                    : <Button onClick={() => {
                                        props.follow(u.id)
                                    }} variant={'contained'}>follow</Button>}

                            </div>
                        </span>
                        <span>
                            <span>
                                <div>{u.name}</div>
                                <div>{u.status}</div>
                            </span>
                            <span>
                                <div>{"u.location.country"}</div>
                                <div>{"u.location.city"}</div>
                            </span>
                        </span>
                    </div>
                )
            })}
        </div>
    )
}