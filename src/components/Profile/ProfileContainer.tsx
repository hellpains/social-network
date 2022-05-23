import React from 'react';
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {AppRootStateType} from "../../redux/reduxStore";
import {getUserProfileTC, setUserProfile} from "../../redux/profileReducer";
import { RouteComponentProps, withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/WithAuthRedirect";
import {compose} from "redux";

export type ProfileType = {
    aboutMe: string,
    contacts: any
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    userId: number
    photos: {
        small: string
        large: string
    }
}

type PathParamsType = {
    userId: string
}

type OwnPropsType = MapStateToPropsType & MapDispatchPropsType

type PropsType = RouteComponentProps<PathParamsType> & OwnPropsType

class ProfileContainer extends React.Component<PropsType> {
    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = '2';
        }
        this.props.getUserProfileTC(userId)

    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        );
    }
};


type MapDispatchPropsType = {
    setUserProfile: (profile: MapStateToPropsType) => void
    getUserProfileTC: (userId: string) => void
}
type MapStateToPropsType = {
    profile: null | ProfileType
}

let mapStateToProps = (state: AppRootStateType): MapStateToPropsType => {
    return {
        profile: state.profilePage.profile,
    }
}


export default compose<React.ComponentType>(
    connect(mapStateToProps, {setUserProfile, getUserProfileTC}),
    withRouter,
    withAuthRedirect
)(ProfileContainer)
