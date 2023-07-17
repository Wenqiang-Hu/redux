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

const f2 = (state = "", action) => {
  switch (action.type) {
    case "concat":
      return state + action.char;
    default:
      return state;
  }
}

const f3 = (state = {}, action) => {
  return {
    f1: f1(state.f1, action),
    f2: f2(state.f2, action)
  }
}
// store 
const store = configureStore({
    reducer: f3,
});

// need to declare subscribe first then dispatch will be effected
store.subscribe(() => console.log(store.getState()));

store.dispatch({type: "add", value: 3});
store.dispatch({type: "concat", char: 'will'});
store.dispatch({type: "add", value: 3});
store.dispatch({type: "sub", value: 3});



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
