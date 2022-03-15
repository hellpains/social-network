import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";

export type ProfilePropsType={
    id:number
    message:string
    likesCount:number
}
export type DialogType={
    id:number
    name:string
}
export type MessageType={
    id:number
    message:string
}
let dialogs = [
    {id: 1, name: 'Hellpains'},
    {id: 2, name: 'Xalifat'},
    {id: 3, name: 'pretty'},
    {id: 4, name: 'Oland'},
    {id: 5, name: 'hkmv'},
    {id: 6, name: 'rosul'},
]
let message = [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'How is your it-kamasutra'},
    {id: 3, message: 'Yo'},
    {id: 4, message: 'Yo'},
    {id: 5, message: 'Yo'},
]
let posts=[
    {id:1,message:'Hi, how are you?',likesCount:15},
    {id:2,message:'Ii\'s my first post',likesCount:20}
]


ReactDOM.render(
    <BrowserRouter>
        <App dialogs={dialogs} message={message} posts={posts}/>
    </BrowserRouter>,
    document.getElementById('root'));