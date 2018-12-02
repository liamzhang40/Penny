import { combineReducers } from 'redux';
import restaurantFilterOptions from './restaurant_filter_option_reducer';
import restaurantPageNumber from './restaurant_page_number_reducer';
import restaurantLoadingStatus from './restaurant_loading_status_reducer';

const uiReducer = combineReducers(
    {
        restaurantFilterOptions,
        restaurantPageNumber,
        restaurantLoadingStatus
    }
);

export default uiReducer;