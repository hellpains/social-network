import React from 'react';
import s from './Header.module.css';
import {Header} from "./Header";
import {connect} from "react-redux";
import {loginTC} from "../../redux/authReducer";
import {AppRootStateType} from "../../redux/reduxStore";


class HeaderContainer extends React.Component<MapDispatchToPropsType & MapStateToPropsType> {

    componentDidMount() {
        this.props.loginTC()
    }

    render() {
        return <Header {...this.props} />
    }
};


const mapStateToProps = (state: AppRootStateType): MapStateToPropsType => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
})


type MapDispatchToPropsType = {
    loginTC: () => void
}

type MapStateToPropsType = {
    isAuth: boolean,
    login: string | null
}

export default connect(mapStateToProps, {loginTC})(HeaderContainer)