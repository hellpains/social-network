import React from 'react';
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {AppRootStateType} from "../../redux/reduxStore";
import { getUserProfileTC, setUserProfile} from "../../redux/profileReducer";
import {Redirect, RouteComponentProps, withRouter} from "react-router-dom";

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
        if(!this.props.isAuth) return <Redirect to={"/login"}/>

        return (
            <Profile {...this.props} profile={this.props.profile}/>
        );
    }
};




let WithUrlDataContainerComponent = withRouter(ProfileContainer);

type MapDispatchPropsType = {
    setUserProfile: (profile: MapStateToPropsType) => void
    getUserProfileTC:(userId:string)=>void
}


type MapStateToPropsType = {
    profile: null | ProfileType
    isAuth:boolean
}
let mapStateToProps = (state: AppRootStateType): MapStateToPropsType => {
    return {
        profile: state.profilePage.profile,
        isAuth:state.auth.isAuth
    }
}

export default connect(mapStateToProps, {setUserProfile,getUserProfileTC})(WithUrlDataContainerComponent);


