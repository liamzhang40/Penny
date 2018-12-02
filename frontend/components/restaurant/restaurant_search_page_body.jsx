import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import RestaurantIndexContainer from './restaurant_index_container';
import RestaurantFilterOptions from './restaurant_filter_options';
import RestaurantIndexPageNumber from './restaurant_index_page_numbers';
import RestaurantSearchPageLoadingCover from './restaurant_search_page_loading_cover';

const RestaurantBodyBackground = styled.div`
    position: relative;
    min-width: 1020px;
`;

const RestaurantListContainer = styled.div`
    max-width: 960px;
    margin: 18px auto;
`;

const RestaurantFilterOptionsLayer = styled.div`
    max-width: 960px;
    margin: 0 auto;
`;

const RestaurantList = styled.div`
    width: 630px;
`;

const RestaurantFilterOptionsContainer = styled.div`
    background-color: #f5f5f5;
    width: 100%;
    border-bottom: 1px solid #e6e6e6;
`;

const mapStateToProps = state => {
    return {
        status: state.ui.restaurantLoadingStatus
    }
}

const RestaurantSearchPageBody = ({status}) => {
    return (
        <RestaurantBodyBackground>
            {
                status && <RestaurantSearchPageLoadingCover />
            }
            <RestaurantFilterOptionsContainer>
                <RestaurantFilterOptionsLayer>
                    <RestaurantFilterOptions />
                </RestaurantFilterOptionsLayer>
            </RestaurantFilterOptionsContainer>
            <RestaurantListContainer>
                <RestaurantList>
                    <RestaurantIndexContainer />
                </RestaurantList>
                {
                    !status && <RestaurantIndexPageNumber />
                }
            </RestaurantListContainer>
        </RestaurantBodyBackground>
    );
}

export default connect(mapStateToProps)(RestaurantSearchPageBody);