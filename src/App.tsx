import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Routes, Route} from "react-router-dom";
import {Settings} from "./components/Setting/Settings";
import {Music} from "./components/Music/Music";
import {Newss} from "./components/News/News";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";



const App = () => {


    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Routes>

                    <Route path={'/dialogs'} element={
                        <DialogsContainer />
                    }/>

                    <Route path={'/profile'} element={
                        <Profile />
                    }/>

                    <Route path={'/newss'} element={<Newss/>}/>
                    <Route path={'/music'} element={<Music/>}/>
                    <Route path={'/settings'} element={<Settings/>}/>

                </Routes>
            </div>

        </div>

    );
}

export default App;

