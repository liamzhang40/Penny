import React from 'react';
import styled from 'styled-components';
import RestaurantSearchPageNav from './restaurant_search_page_nav';
import RestaurantSearchPageBody from './restaurant_search_page_body';

const RestaurantSearchPageContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

const RestaurantSearchPage = () => {
    return (
        <RestaurantSearchPageContainer>
            <RestaurantSearchPageNav />
            <RestaurantSearchPageBody />
        </RestaurantSearchPageContainer>
    );
};

export default RestaurantSearchPage;