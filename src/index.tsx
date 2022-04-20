import ReactDOM from "react-dom";

import {BrowserRouter} from "react-router-dom";
import App from "./App";
import React from "react";
import {store} from "./redux/reduxStore";


let rerenderTree = () => {

    ReactDOM.render(
        <BrowserRouter>
            <App store={store}/>
        </BrowserRouter>, document.getElementById('root')
    );

}

rerenderTree()
store.subscribe(rerenderTree)


