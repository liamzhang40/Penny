import React from 'react';
import styled from 'styled-components';
import CityInput from './city_input';
import RestaurantIndexContainer from './restaurant_index_container';

const RestaurantSearchPageGrid = styled.div`
    display: flex;
    flex-direction: column;
`;

const RestaurantSearchPage = () => {
    return (
        <RestaurantSearchPageGrid>
            <CityInput />
            <RestaurantIndexContainer />
        </RestaurantSearchPageGrid>
    );
};

export default RestaurantSearchPage;