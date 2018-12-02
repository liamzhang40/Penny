import {
    TOGGLE_RESTAURANTS_LOADING_STATUS
} from '../../actions/restaurant_actions';

const restaurantLoadingStatusReducer = (state = true, action) => {
    Object.freeze(state);

    switch (action.type) {
        case TOGGLE_RESTAURANTS_LOADING_STATUS:
            return !state;
        default:
            return state;
    }
}

export default restaurantLoadingStatusReducer;