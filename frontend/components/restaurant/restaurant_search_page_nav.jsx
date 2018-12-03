import React from 'react';
import styled from 'styled-components';
import Greeting from '../greeting/greeting';
import RestaurantSearchForm from './restaurant_search_form';

const RestaurantTopNavBar = styled.nav`
    min-width: 1020px;
    height: 64px;
    background-color: #d32323;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const RestaurantNavContainer = styled.div`
    min-width: 1000px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const RestaurantSearchPageNav = () => {
    return (
        <RestaurantTopNavBar>
            <RestaurantNavContainer>
                <RestaurantSearchForm />
                <Greeting />
            </RestaurantNavContainer>
        </RestaurantTopNavBar>
    );
};

export default RestaurantSearchPageNav;