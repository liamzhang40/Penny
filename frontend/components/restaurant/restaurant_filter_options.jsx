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

const SortOptions = ({ restaurantFilterOptions, toggleRestaurantFilter}) => {
    const handleChange = (orderBy, order) => (
        e => {
            toggleRestaurantFilter(Object.assign(
                {},
                restaurantFilterOptions,
                {orderBy, order}
            ));
        }
    );

    const radio = ["price", "rating"].map((orderBy, idx) => (
        <li key={idx}>
            <span className="sort-titles">
                {`sort by ${orderBy}:`}
            </span>
            {["low to high", "high to low"].map((order, idx2) => (
                <label key={idx2}>{order}
                    <input
                        value={order}
                        onChange={handleChange(orderBy, order)}
                        type="radio"
                        name="sort" />
                </label>
            ))}
        </li>
    ));
    return (
        <ul className="sort-options">
            {radio}
        </ul>
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(SortOptions);