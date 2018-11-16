import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { FilterButton } from '../styles';
import { toggleRestaurantFilter } from '../../actions/restaurant_actions';

const FilterButtonList = styled.ul`
    display: flex;
`;

const FilterButtonPrice = styled(FilterButton)`
    border-radius: 0;

    &:first-child {
        border-radius: 4px 0 0 4px;
    }

    &:last-child {
        border-radius: 0 4px 4px 0;
    }

    &:not(:first-child) {
        margin-left: -1px;
    }
`;

const mapStateToProps = state => {
    return {
        restaurantFilterOptions: state.ui.restaurantFilterOptions
    };
};

const mapDispatchToProps = dispatch => {
    return {
        toggleRestaurantFilter: filterObj => dispatch(toggleRestaurantFilter(filterObj))
    };
};

const RestaurantFilterOptions = ({ restaurantFilterOptions, toggleRestaurantFilter }) => {
    const priceOptions = ["$", "$$", "$$$", "$$$$"].map((price, idx) => (
        <FilterButtonPrice 
            key={ idx }
            onClick={ () => {
                if (restaurantFilterOptions.price === price) {
                    toggleRestaurantFilter({ price: "" });
                } else {
                    toggleRestaurantFilter({ price });
                }
            }}><span>{ price }</span></FilterButtonPrice>
    ));

    const otherOptions = ["Open Now", "Order Delivery", "Order Takeout", "Make a Reservation"].map((option, idx) => (
        <FilterButton marginOn
            key={ idx }
            onClick={ () => {
                toggleRestaurantFilter({
                    [option]: !restaurantFilterOptions[option]
                });
            }}><span>{ option }</span></FilterButton>
    ));
    
    return (
        <FilterButtonList>
            <li>
                <FilterButtonList>
                    { priceOptions }
                </FilterButtonList>
            </li>
            { otherOptions }
        </FilterButtonList>

    );
};

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantFilterOptions);