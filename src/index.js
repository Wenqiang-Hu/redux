import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./component/app";
import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";

// define reducer
const f1 = (state = 0, action) => {
    switch (action.type) {
        case "add":
            return state + action.value;
        case "sub":
            return state - action.value;
        default:
            return state;
    }
};

// store 
const store = configureStore({
    reducer: f1,
});

// need to declare subscribe first then dispatch will be effected
store.subscribe(() => console.log(store.getState()));

store.dispatch({type: "add", value: 3});
store.dispatch({type: "add", value: 3});
store.dispatch({type: "add", value: 3});
store.dispatch({type: "sub", value: 3});



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
