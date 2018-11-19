import React from 'react';
import RestaurantSearchPage from './restaurant/restaurant_search_page';
import { HashRouter } from 'react-router-dom';

const Main = () => {
    return (
        <HashRouter>
            <RestaurantSearchPage />
        </HashRouter>
    );
};

export default Main;