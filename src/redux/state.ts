

export type PostType = {
    id: number
    message: string
    likesCount: number
}
export type DialogType = {
    id: number
    name: string
}
export type MessageType = {
    id: number
    message: string
}
export type ProfilePageType = {
    posts: Array<PostType>
    newPostText: string
}
export type DialogsPageType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
}

export type SidebarPageType = {}

export type StateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    sidebar: SidebarPageType
}

export let state: StateType = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hi, how are you?', likesCount: 15},
            {id: 2, message: 'Ii\'s my first post', likesCount: 20}
        ],
        newPostText: 'it-kamasutra.com'
    },
    dialogsPage: {
        messages: [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'How is your it-kamasutra'},
            {id: 3, message: 'Yo'},
            {id: 4, message: 'Yo'},
            {id: 5, message: 'Yo'},
        ],
        dialogs: [
            {id: 1, name: 'Hellpains'},
            {id: 2, name: 'Xalifat'},
            {id: 3, name: 'pretty'},
            {id: 4, name: 'Oland'},
            {id: 5, name: 'hkmv'},
            {id: 6, name: 'rosul'},
        ],

    },
    sidebar: {}
}


export const addPost = (postMessage: string) => {
    let newPost: PostType = {
        id: 5,
        message:postMessage,
        likesCount: 0
    }
    state.profilePage.posts.unshift(newPost)
    state.profilePage.newPostText='';
    rerenderEntireTree(state);
}




export const updateNewPostText = (newText: string) => {
    state.profilePage.newPostText = newText
    rerenderEntireTree(state);
}























