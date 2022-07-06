import React from 'react';
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {AppRootStateType} from "../../redux/reduxStore";
import {getStatus, getUserProfileTC, updateStatus} from "../../redux/profileReducer";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/WithAuthRedirect";
import {compose} from "redux";

export type ProfileType = {
    aboutMe: string,
    contacts: any
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    userId: string|null
    photos: {
        small: string
        large: string
    }
}

type PathParamsType = {
    userId: string
}

class ProfileContainer extends React.Component<PropsType> {
    componentDidMount() {
        debugger
        let userId = this.props.match.params.userId
        if (!userId) {
            // @ts-ignore
            userId = this.props.authorizedUserId;
        }
        debugger
        this.props.getUserProfileTC(userId);
        this.props.getStatus(userId)

    }

    render() {
        return (
            <Profile {...this.props}
                     profile={this.props.profile}
                     status={this.props.status}
                     updateStatus={this.props.updateStatus}/>
        );
    }
};


let mapStateToProps = (state: AppRootStateType): MapStateToPropsType => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        authorizedUserId: state.auth.userId,
        isAuth: state.auth.isAuth
    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, {getUserProfileTC, getStatus, updateStatus}),
    withAuthRedirect,
    withRouter,
)(ProfileContainer)




type MapDispatchPropsType = {
    getUserProfileTC: (userId: string) => void
    getStatus: (userId: string) => void
    updateStatus: (status: string) => void
}
type MapStateToPropsType = {
    profile: null | ProfileType
    status: string
    authorizedUserId: null|string
    isAuth: boolean
}
type OwnPropsType = MapStateToPropsType & MapDispatchPropsType

type PropsType = RouteComponentProps<PathParamsType> & OwnPropsType
