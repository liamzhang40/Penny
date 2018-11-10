import {
    combineReducers
} from 'redux';
import restaurants from './restaurant_reducer';

const entityReducer = combineReducers({
    restaurants
});

export default entityReducer;