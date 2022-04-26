import React from 'react'
import s from './Users.module.css'
import {connect} from "react-redux";
import {Users} from "./Users";
import {AllAppActionsType, AppRootStateType} from "../../redux/reduxStore";
import {Dispatch} from "redux";
import {followAC, InitialStateType, setUsersAC, unfollowAC, UserType} from "../../redux/usersReducer";


type MapStateToPropsType = {
    usersPage: InitialStateType
}

type MapDispatchToPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users:Array<UserType>) => void
}


let mapStateToProps = (state: AppRootStateType): MapStateToPropsType => {
    return {
        usersPage: state.usersPage
    }
}

let mapDispatchToProps = (dispatch: Dispatch<AllAppActionsType>): MapDispatchToPropsType => {
    return {
        follow: (userId: number) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId: number) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users: Array<UserType>) => {
            dispatch(setUsersAC(users))
        },
    }

}


export default connect(mapStateToProps, mapDispatchToProps)(Users)