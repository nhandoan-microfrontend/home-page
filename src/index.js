import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {unregister} from './serviceWorker';

window.renderHomePage = (containerId, history) => {
    ReactDOM.render(
        <App history={history} />,
        document.getElementById(containerId),
        unregister()
    );
};

window.unmountHomePage = containerId => {
    ReactDOM.unmountComponentAtNode(document.getElementById(containerId));
};

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
