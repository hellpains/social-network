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
import {store, StoreType} from "./redux/state";

type AppPropsType = {
    store: StoreType
}


const App = (props: AppPropsType) => {

    const state = props.store.getState()

    return (
        <div className='app-wrapper' >
            <Header/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Routes>
                    <Route path={'/dialogs'} element={
                        <Dialogs
                            dialogsPage={state.dialogsPage}
                            dispatch={store.dispatch.bind(store)}
                        />
                    }/>
                    <Route path={'/profile'} element={
                        <Profile
                            profilePage={state.profilePage}
                            dispatch={store.dispatch.bind(store)}
                            // addPost={props.store.addPost.bind(props.store)}
                            // updateNewPostText={props.store.updateNewPostText.bind(props.store)}
                        />
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

