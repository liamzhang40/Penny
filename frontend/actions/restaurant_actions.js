import * as restaurantAPIUtils from '../utils/restaurant_api_utils';
export const RECEIVE_RESTAURANTS = "RECEIVE_RESTAURANTS";
export const TOGGLE_RESTAURANTS_FILTER = "TOGGLE_RESTAURANTS_FILTER";

const receiveRestaurants = restaurants => (
    {
        type: RECEIVE_RESTAURANTS,
        restaurants
    }
);

export const toggleRestaurantFilter = (filterObj) => (
    {
        type: TOGGLE_RESTAURANTS_FILTER,
        filterObj
    }
);

export const fetchRestaurants = (location, term, limit) => {
  return dispatch => {
      return restaurantAPIUtils.fetchRestaurants(location, term, limit).then(
          response => {
              return dispatch(receiveRestaurants(response.businesses));
          }
      );
  };
};