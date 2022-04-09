import {state, StateType, subscribe} from "./redux/state";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import React from "react";

let rerenderEntireTree = (state:StateType) => {

 ReactDOM.render(<BrowserRouter><App state={state}/></BrowserRouter>, document.getElementById('root'));

}
rerenderEntireTree(state)

subscribe(rerenderEntireTree)