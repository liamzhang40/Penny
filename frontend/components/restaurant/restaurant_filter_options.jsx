import React from 'react';
import { connect } from 'react-redux';
import { toggleRestaurantFilter } from '../../actions/restaurant_actions';

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
        <li 
            key={ idx }
            onClick={ () => {
                if (restaurantFilterOptions.price === price) {
                    toggleRestaurantFilter({ price: "" });
                } else {
                    toggleRestaurantFilter({ price });
                }
            } }>{ price }</li>
    ));

    // const otherOptionsObj = {
    //     "Open Now": "is_closed",
    //     "Make a Reservation": "restaurant_reservation",
    //     "Order Takeout": "pickup",
    //     "Order Delivery": "delivery"
    // };
    
    const otherOptions = ["Open Now", "Make a Reservation", "Order Takeout", "Order Delivery"].map((option, idx) => (
        <li
            key={ idx }
            onClick={ () => {
                toggleRestaurantFilter({
                    [option]: !restaurantFilterOptions[option]
                });
            } }>{ option }</li>
    ));
    
    return (
        <ul>
            <li>
                <ul>
                    { priceOptions }
                </ul>
            </li>
            { otherOptions }
        </ul>

    );
};

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantFilterOptions);