
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {addPostAC, InitialStateType, updateNewPostTextAC} from "../../../redux/profileReducer";
import {AllAppActionsType, AppRootStateType} from "../../../redux/reduxStore";

type MapStateToPropsType = {
    profilePage: InitialStateType
}
type MapDispatchToPropsType = {
    addPost: () => void
    updateNewPostText: (newText: string) => void
}


const mapStateToProps = (state: AppRootStateType): MapStateToPropsType => {
    return {
        profilePage: state.profilePage
    }
}
const mapDispatchToProps = (dispatch: Dispatch<AllAppActionsType>): MapDispatchToPropsType => {
    return {
        addPost: () => {
            dispatch(addPostAC())
        },
        updateNewPostText: (newText:string) => {
            dispatch(updateNewPostTextAC(newText))
        }
    }
}
export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)