import React from 'react'
import s from './Users.module.css'
import {InitialStateType, UserType} from "../../redux/usersReducer";
import { Button} from "@mui/material";

type UsersType = {
    usersPage: InitialStateType
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: Array<UserType>) => void
}

export let Users = (props: UsersType) => {
    if (props.usersPage.users.length === 0) {
        props.setUsers(
            [
                {
                    id: 1,
                    photoUrl: 'https://filestore.community.support.microsoft.com/api/images/f2e55cbf-8316-4d3a-9412-ecd8194b2a72?upload=true',
                    followed: false,
                    fullName: 'Rustam',
                    status: 'I am a boss',
                    location: {city: 'Grozny', country: 'Russia'}
                },
                {
                    id: 2,
                    photoUrl: 'https://filestore.community.support.microsoft.com/api/images/f2e55cbf-8316-4d3a-9412-ecd8194b2a72?upload=true',
                    followed: true,
                    fullName: 'Arbi',
                    status: 'I am a boss too',
                    location: {city: 'Moscow', country: 'Russia'}
                },
                {
                    id: 3,
                    photoUrl: 'https://filestore.community.support.microsoft.com/api/images/f2e55cbf-8316-4d3a-9412-ecd8194b2a72?upload=true',
                    followed: false,
                    fullName: 'Deni',
                    status: 'I am a boss too',
                    location: {city: 'Piter', country: 'Russia'}
                },
            ]
        )
    }


    return (
        <div>
            {props.usersPage.users.map(u => {
                return (
                    <div key={u.id}>
                        <span>
                            <div>
                                <img src={u.photoUrl} alt="" className={s.userPhoto}/>
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
                                <div>{u.fullName}</div>
                                <div>{u.status}</div>
                            </span>
                            <span>
                                <div>{u.location.country}</div>
                                <div>{u.location.city}</div>
                            </span>
                        </span>
                    </div>
                )
            })}
        </div>
    )
}