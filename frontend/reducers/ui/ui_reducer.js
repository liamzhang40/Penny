import { combineReducers } from 'redux';
import restaurantFilterOptions from './restaurant_filter_option_reducer';
import restaurantPageNumber from './restaurant_page_number_reducer';

const uiReducer = combineReducers(
    {
        restaurantFilterOptions,
        restaurantPageNumber
    }
);

export default uiReducer;