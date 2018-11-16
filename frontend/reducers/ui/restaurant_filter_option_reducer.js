import {
    TOGGLE_RESTAURANTS_FILTER
} from '../../actions/restaurant_actions';

const restaurantFilterOptionReducer = (state = {
    orderBy: "",
    order: "",
    price: "",
    openNow: "",
    transactions: []
}, action) => {
    Object.freeze(state);

    switch (action.type) {
        case TOGGLE_RESTAURANTS_FILTER:
            return Object.assign({}, state, action.filterObj);
        default:
            return state;
    }
};

export default restaurantFilterOptionReducer;