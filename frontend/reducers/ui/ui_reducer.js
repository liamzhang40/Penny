import { combineReducers } from 'redux';
import restaurantFilterOptions from './restaurant_filter_option_reducer';
import restaurantPage from './restaurant_page_reducer';

const uiReducer = combineReducers(
    {
        restaurantFilterOptions,
        restaurantPage
    }
);

export default uiReducer;