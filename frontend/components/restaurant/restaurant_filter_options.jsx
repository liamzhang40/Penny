import React from 'react';
import { connect } from 'react-redux';
import { toggleRestaurantFilter } from '../../actions/restaurant_actions';

const mapStateToProps = state => {
    return {
        price: state.ui.restaurantFilterOptions.price
    };
};

const mapDispatchToProps = dispatch => {
    return {
        toggleRestaurantFilter: filterObj => dispatch(toggleRestaurantFilter(filterObj))
    };
};

const RestaurantFilterOptions = ({ price, toggleRestaurantFilter }) => {
    const handleClick = (field) => (
        e => {
            const selectedPrice = e.target.textContent;
            if (price === selectedPrice) {
                toggleRestaurantFilter({ [field]: "" });
            } else {
                toggleRestaurantFilter({ [field]: selectedPrice});
            }
        }
    );

    const prices = ["$", "$$", "$$$", "$$$$"].map((dollar, idx) => (
        <li 
            key={idx}
            onClick={handleClick("price")}>{dollar}</li>
    ));
    
    return (
        <ul>
            <li>
                <ul>
                    {prices}
                </ul>
            </li>


        </ul>

    );
};

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantFilterOptions);