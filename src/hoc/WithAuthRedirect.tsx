import React, {Component, ComponentType} from "react";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {AppRootStateType} from "../redux/reduxStore";
import {Preloader} from "../components/common/Preloader/Preloader";

type MapStatePropsType = {
    isAuth: boolean
}
const MapStateToProps = (state: AppRootStateType): MapStatePropsType => {
    return {
        isAuth: state.auth.isAuth
    }
}

export function withAuthRedirect<T>(Component: ComponentType<T>) {
    const RedirectComponent = (props: MapStatePropsType) => {

        let {isAuth, ...restProps} = props


        if (!isAuth) return <Redirect to={"/login"}/> && <Preloader/>


        return <Component {...restProps as T}/>
    }

    let ConnectedRedirectComponent = connect(MapStateToProps)(RedirectComponent)

    return ConnectedRedirectComponent;
}