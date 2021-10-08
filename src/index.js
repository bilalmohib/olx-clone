import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import router from './config/router';
import * as serviceWorker from './serviceWorker';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, Router } from "react-router-dom"
import { faRoad } from '@fortawesome/free-solid-svg-icons';
import { Provider } from 'react-redux'
import store from './store'

import history from './history'

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
        <App />
        </Router>
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
