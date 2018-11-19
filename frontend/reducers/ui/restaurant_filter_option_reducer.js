import {
    TOGGLE_RESTAURANTS_FILTER
} from '../../actions/restaurant_actions';

const restaurantFilterOptionReducer = (state = {
    orderBy: "",
    order: "",
    price: "",
    "Open Now": false,
    "Make a Reservation": false,
    "Order Takeout": false,
    "Order Delivery": false
}, action) => {
    // the state should be stored in session storage so it persists upon page refreshing
    Object.freeze(state);

    switch (action.type) {
        case TOGGLE_RESTAURANTS_FILTER:
            return Object.assign({}, state, action.filterObj);
        default:
            return state;
    }
};

export default restaurantFilterOptionReducer;