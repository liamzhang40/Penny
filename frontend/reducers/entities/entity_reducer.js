import {
    combineReducers
} from 'redux';
import restaurants from './restaurant_reducer';
import users from './user_reducer';

const entityReducer = combineReducers({
    restaurants,
    users
});

export default entityReducer;