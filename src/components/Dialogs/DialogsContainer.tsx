import {
    InitialStateType,
    sendMessageAC,
    updateNewMessageTextAC
} from "../../redux/dialogsReducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {AllAppActionsType, AppRootStateType} from "../../redux/reduxStore";
import {Dispatch} from "redux";
import {Redirect} from "react-router-dom";
import React from "react";
import {withAuthRedirect} from "../../hoc/WithAuthRedirect";

type MapStateToPropsType = {
    dialogsPage: InitialStateType
    isAuth: boolean

}

type MapDispatchToPropsType = {
    sendMessage: () => void
    updateNewMessageText: (newText: string) => void
}


const mapStateToProps = (state: AppRootStateType): MapStateToPropsType => {
    return {
        dialogsPage: state.dialogsPage,
        isAuth: state.auth.isAuth
    }
}
const mapDispatchToProps = (dispatch: Dispatch<AllAppActionsType>): MapDispatchToPropsType => {
    return {
        sendMessage: () => {
            dispatch(sendMessageAC())
        },
        updateNewMessageText: (newText: string) => {
            dispatch(updateNewMessageTextAC(newText))
        }
    }
}




const AuthRedirectComponent = withAuthRedirect(Dialogs)

export default connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent)























