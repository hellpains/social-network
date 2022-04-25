import ReactDOM from "react-dom";

import {BrowserRouter} from "react-router-dom";
import App from "./App";
import React from "react";
import {store} from "./redux/reduxStore";
import {Provider} from "react-redux";

let rerenderTree = () => {

    ReactDOM.render(
        <BrowserRouter>
            <Provider store={store}>
                <App />
            </Provider>
        </BrowserRouter>, document.getElementById('root')
    );

}

rerenderTree()
store.subscribe(rerenderTree)


