import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {addPostAC, InitialStateType} from "../../../redux/profileReducer";
import {AllAppActionsType, AppRootStateType} from "../../../redux/reduxStore";

type MapStateToPropsType = {
    profilePage: InitialStateType
}
type MapDispatchToPropsType = {
    addPost: (newPostText:string) => void
}


const mapStateToProps = (state: AppRootStateType): MapStateToPropsType => {
    return {
        profilePage: state.profilePage
    }
}
const mapDispatchToProps = (dispatch: Dispatch<AllAppActionsType>): MapDispatchToPropsType => {
    return {
        addPost: (newPostText:string) => {
            dispatch(addPostAC(newPostText))
        }
    }
}
export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)