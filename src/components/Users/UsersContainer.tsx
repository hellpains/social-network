import React from 'react'
import s from './Users.module.css'
import {connect} from "react-redux";
import {Users} from "./Users";
import {AppRootStateType} from "../../redux/reduxStore";
import {Dispatch} from "redux";
import {followAC, setUsersAC, unfollowAC, UsersActionsType} from "../../redux/usersReducer";



let mapStateToProps = (state:AppRootStateType) => {
    return {
        users: state.usersPage.users
    }
}

let mapDispatchToProps = (dispatch: Dispatch<UsersActionsType>) => {
    return {
        follow:(userId:number)=>{
            dispatch(followAC(userId))
        },
        unfollow:(userId:number)=>{
            dispatch(unfollowAC(userId))
        },
        setUsers:(users:any)=>{
            dispatch(setUsersAC(users))
        },
    }

}


export default connect(mapStateToProps, mapDispatchToProps)(Users)