import * as yelpAPIUtils from '../utils/yelp_api_util';
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

export const fetchRestaurants = (city, offset) => {
  return dispatch => {
      return yelpAPIUtils.fetchRestaurants(city, offset).then(
          response => {
              return dispatch(receiveRestaurants(response.businesses));
          }
      );
  };
};