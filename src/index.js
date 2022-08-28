import React from 'react';
import { render } from "react-dom";
import { App } from "./components/App.js";
import "./styles/index.css";
import { RecoilRoot } from 'recoil'
const createDOMElement = () => {
    const body = document.getElementsByTagName('body')[0];
    const div = Object.assign(document.createElement('div'), {
        id: "root",
    });
    body.appendChild(div);
    return div;
}

const renderAppContainer = () => {
    render(
        <RecoilRoot>
            <App />
        </RecoilRoot>
        , createDOMElement());
}

renderAppContainer();

export { renderAppContainer };



