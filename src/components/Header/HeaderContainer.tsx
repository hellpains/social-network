import React from 'react';
import s from './Header.module.css';
import {Header} from "./Header";
import {connect} from "react-redux";
import {getAuthUserData} from "../../redux/authReducer";
import {AppRootStateType} from "../../redux/reduxStore";


class HeaderContainer extends React.Component<MapDispatchToPropsType & MapStateToPropsType> {
    componentDidMount() {
        this.props.getAuthUserData()
    }

    render() {
        return <Header {...this.props} />
    }
};


type MapStateToPropsType = {
    isAuth: boolean,
    login: string | null
}
const mapStateToProps = (state: AppRootStateType): MapStateToPropsType => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
})


type MapDispatchToPropsType = {
    getAuthUserData: () => void
}



export default connect(mapStateToProps, {getAuthUserData})(HeaderContainer)