import './stylesheets/reset.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
import { fetchLoginPage } from './utils/user_api_utils';

document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root");
    const store = configureStore();

    ReactDOM.render(<Root store={store} />, root);
    window.dispatch = store.dispatch;
});

window.fetchLoginPage = fetchLoginPage;