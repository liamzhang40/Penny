import React from 'react';
import styled from 'styled-components';
import RestaurantIndexContainer from './restaurant_index_container';
import RestaurantFilterOptions from './restaurant_filter_options';

const RestaurantBodyBackground = styled.div`
    min-width: 1020px;
`;

const RestaurantListContainer = styled.div`
    max-width: 960px;
    margin: auto;
`;

const RestaurantList = styled.div`
    margin-top: 18px;
    width: 630px;
`;

const RestaurantFilterOptionsContainer = styled.div`
    background-color: #f5f5f5;
    width: 100%;
    border-bottom: 1px solid #e6e6e6;
`;

const RestaurantSearchPageBody = () => {
    return (
        <RestaurantBodyBackground>
            <RestaurantFilterOptionsContainer>
                <RestaurantFilterOptions />
            </RestaurantFilterOptionsContainer>
            <RestaurantListContainer>
                <RestaurantList>
                    <RestaurantIndexContainer />
                </RestaurantList>
            </RestaurantListContainer>
        </RestaurantBodyBackground>
    );
}

export default RestaurantSearchPageBody;