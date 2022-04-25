import {addPostAC, profileReducer, updateNewPostTextAC} from "./profileReducer";
import { dialogsReducer, updateNewMessageTextAC} from "./dialogsReducer";

// export type PostType = {
//     id: number
//     message: string
//     likesCount: number
//     time:string
// }
// export type DialogType = {
//     id: number
//     name: string
// }
// export type MessageType = {
//     id: number
//     message: string
// }
// export type ProfilePageType = {
//     posts: Array<PostType>
//     newPostText: string
// }
// export type DialogsPageType = {
//     dialogs: Array<DialogType>
//     messages: Array<MessageType>
//     newMessageText: string
// }
// export type SidebarPageType = {}
// export type StateType = {
//     profilePage: ProfilePageType
//     dialogsPage: DialogsPageType
//     sidebar: SidebarPageType
// }
//
//
// export type StoreType = {
//     _state: StateType
//     subscribe: (observer: (state: StateType) => void) => void
//     getState: () => StateType
//     _rerenderEntireTree: (state: any) => void
//     dispatch: (action: ActionsTypes) => void
// }
//
//
// export type ActionsTypes =
//     ReturnType<typeof addPostAC>
//     | ReturnType<typeof updateNewPostTextAC>
//     | ReturnType<typeof addMessageAC>
//     | ReturnType<typeof updateNewMessageTextAC>
//
//
// export let store: StoreType = {
//     _state: {
//         profilePage: {
//             posts: [
//                 {id: 1, message: 'Hi, how are you?', likesCount: 15,time:'21:00'},
//                 {id: 2, message: 'Ii\'s my first post', likesCount: 20,time:'11:00'}
//             ],
//             newPostText: 'it-kamasutra.com'
//         },
//         dialogsPage: {
//             messages: [
//                 {id: 1, message: 'Hi'},
//                 {id: 2, message: 'How is your it-kamasutra'},
//                 {id: 3, message: 'Yo'},
//                 {id: 4, message: 'Yo'},
//                 {id: 5, message: 'Yo'},
//             ],
//             dialogs: [
//                 {id: 1, name: 'Hellpains'},
//                 {id: 2, name: 'Xalifat'},
//                 {id: 3, name: 'pretty'},
//                 {id: 4, name: 'Oland'},
//                 {id: 5, name: 'hkmv'},
//                 {id: 6, name: 'rosul'},
//             ],
//             newMessageText: ''
//         },
//         sidebar: {}
//     },
//     _rerenderEntireTree() {
//         console.log('State changed')
//     },
//
//     getState() {
//         return this._state
//     },
//     subscribe(observer) {
//         this._rerenderEntireTree = observer
//     },
//     dispatch(action) {
//
//         this._state.profilePage = profileReducer(this._state.profilePage, action)
//         this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
//         this._rerenderEntireTree(this._state);
//
//     }
// }



























