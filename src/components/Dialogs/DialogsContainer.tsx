import {InitialStateType,
    sendMessageAC,
    updateNewMessageTextAC} from "../../redux/dialogsReducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {AllAppActionsType, AppRootStateType} from "../../redux/reduxStore";
import {Dispatch} from "redux";

type MapStateToPropsType = {
    dialogsPage: InitialStateType
}

type MapDispatchToPropsType = {
    sendMessage: () => void
    updateNewMessageText: (newText: string) => void
}


const mapStateToProps = (state: AppRootStateType): MapStateToPropsType => {
    return {
        dialogsPage: state.dialogsPage,
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
export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps) (Dialogs)























