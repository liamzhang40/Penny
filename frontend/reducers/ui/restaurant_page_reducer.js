import {
    TOGGLE_RESTAURANTS_PAGE
} from '../../actions/restaurant_actions';

const restaurantPageReducer = (state = 1, action) => {
    Object.freeze(state);

    switch (action.type) {
        case TOGGLE_RESTAURANTS_PAGE:
            return action.page;
        default:
            return state;
    }
};

export default restaurantPageReducer;