import * as yelpAPIUtils from '../utils/yelp_api_utils';
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

export const fetchRestaurants = (location, term) => {
  return dispatch => {
      return yelpAPIUtils.DjangoFetchRestaurants(location, term).then(
          response => {
              return dispatch(receiveRestaurants(response.businesses));
          }
      );
  };
};