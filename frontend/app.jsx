import './stylesheets/reset.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
import { DjangoFetchRestaurants } from './utils/yelp_api_util';

document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root");
    const store = configureStore();

    ReactDOM.render(<Root store={store} />, root);
    window.dispatch = store.dispatch;
});

window.DjangoFetchRestaurants = DjangoFetchRestaurants;