import { combineReducers } from 'redux';
import restaurantFilterOptions from './restaurant_filter_option_reducer';

const uiReducer = combineReducers(
    {
        restaurantFilterOptions
    }
);

export default uiReducer;