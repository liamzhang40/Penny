import React from 'react';
import { connect } from 'react-redux';
import { fetchRestaurants } from '../../actions/restaurant_actions';
import RestaurantIndex from './restaurant_index';

const mapStateToProps = state => {
    const { orderBy, order } = state.ui.restaurantFilterOptions;
    const restaurants = state.entities.restaurants.slice();
    // will filter the array first when more filter options are added
    if (order === "low to high") {
        restaurants.sort((a, b) => {
            if (a[orderBy] === undefined && b[orderBy] === undefined) {
                return 0;
            } else if (a[orderBy] === undefined) {
                return -1;
            } else if (b[orderBy] === undefined) {
                return 1;
            } else if (typeof a[orderBy] === "number") {
                return a[orderBy] - b[orderBy];
            } else if (typeof a[orderBy] === "string") {
                return a[orderBy].length - b[orderBy].length;
            }
        });
    } else if (order === "high to low") {
        restaurants.sort((a, b) => {
            if (a[orderBy] === undefined && b[orderBy] === undefined) {
                return 0;
            } else if (a[orderBy] === undefined) {
                return 1;
            } else if (b[orderBy] === undefined) {
                return -1;
            } else if (typeof a[orderBy] === "number") {
                return b[orderBy] - a[orderBy];
            } else if (typeof a[orderBy] === "string") {
                return b[orderBy].length - a[orderBy].length;
            }
        });
    }
    return {
        restaurants
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchRestaurants: (city, offset) => dispatch(fetchRestaurants(city, offset))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantIndex);