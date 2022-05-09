import React from 'react'
import s from "./Users.module.css";
// @ts-ignore
import userPhoto from "../../assets/images/206853.png";
import {Button} from "@mui/material";
import {InitialStateType} from "../../redux/usersReducer";
import {NavLink} from "react-router-dom";

type UsersType={
    usersPage:InitialStateType
    pageSize: number
    totalUsersCount: number
    currentPage:number
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    onPageChanged:(p:number)=>void
}

export const Users = (props:UsersType) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    pages.length = 41


    return (
        <div>
            <div>
                {pages.map(p => {
                    return (
                        <span className={props.currentPage === p && s.selectedPage}
                              onClick={(e) => {props.onPageChanged(p)}}>
                                {p} -
                            </span>
                    )
                })}
            </div>
            {props.usersPage.users.map(u => {
                return (
                    <div key={u.id}>
                        <span>
                            <div>
                                <NavLink to={'/profile' + u.id}>
                                    <img src={u.photos.small != null ? u.photos.small : userPhoto} alt=""
                                         className={s.userPhoto}/>
                                </NavLink>
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
};

