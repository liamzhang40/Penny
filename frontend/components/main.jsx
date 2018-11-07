import React from 'react';
import CityInput from './restaurant/city_input';
import RestaurantIndexContainer from './restaurant/restaurant_index_container';

const Main = () => {

    return (
        <div className="background">
            <CityInput />
            <RestaurantIndexContainer />
        </div>
    );
};

export default Main;