import './stylesheets/reset.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
import { fetchRestaurants } from './utils/restaurant_api_utils';

document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root");
    const store = configureStore();

    ReactDOM.render(<Root store={store} />, root);
    window.dispatch = store.dispatch;
});

window.fetchRestaurants = fetchRestaurants;