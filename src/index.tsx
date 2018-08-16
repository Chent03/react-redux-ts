import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import { createStore } from 'redux';


import { App } from "./components/App";
import { rootReducer } from './reducers/index';
import "./styles/style.scss";

const ROOT = document.querySelector(".container");
const Store = createStore(rootReducer);

ReactDOM.render(
    <Provider store={ Store }>
        <App>Hello</App>
    </Provider>, ROOT
);