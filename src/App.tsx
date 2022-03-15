import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {Routes, Route} from "react-router-dom";
import {Settings} from "./components/Setting/Settings";
import {Music} from "./components/Music/Music";
import {Newss} from "./components/News/News";
import {DialogType, MessageType, ProfilePropsType} from "./index";

export type AppType={
    dialogs:Array<DialogType>
    message:Array<MessageType>
    posts:Array<ProfilePropsType>
}

const App = (props:AppType) => {
    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Routes>
                    <Route path={'/dialogs'} element={<Dialogs message={props.message} dialogs={props.dialogs}/>}/>
                    <Route path={'/profile'} element={<Profile posts={props.posts}/>}/>
                    <Route path={'/newss'} element={<Newss/>}/>
                    <Route path={'/music'} element={<Music/>}/>
                    <Route path={'/settings'} element={<Settings/>}/>
                </Routes>
            </div>

        </div>

    );
}

export default App;

