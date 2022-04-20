import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {Routes, Route} from "react-router-dom";
import {Settings} from "./components/Setting/Settings";
import {Music} from "./components/Music/Music";
import {Newss} from "./components/News/News";
import {ReduxStoreType} from "./redux/reduxStore";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";

type AppPropsType = {
    store: ReduxStoreType
}


const App = (props: AppPropsType) => {

    const state = props.store.getState()

    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Routes>

                    <Route path={'/dialogs'} element={
                        <DialogsContainer
                            store={props.store}
                            // dialogsPage={state.dialogsPage}
                            // dispatch={props.store.dispatch}
                        />
                    }/>

                    <Route path={'/profile'} element={
                        <Profile
                            store={props.store}
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

