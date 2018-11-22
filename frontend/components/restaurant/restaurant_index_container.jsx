import { connect } from 'react-redux';
import { fetchRestaurants } from '../../actions/restaurant_actions';
import RestaurantIndex from './restaurant_index';

const mapStateToProps = state => {
    const { 
        orderBy,
        order,
        price,
        "Open Now": isClosed,
        "Make a Reservation": restaurantReservation,
        "Order Takeout": pickup,
        "Order Delivery": delivery
    } = state.ui.restaurantFilterOptions;

    const page = state.ui.restaurantPage;

    const restaurants = state.entities.restaurants.filter(restaurant => (
        (!price || price === restaurant.price) &&
        (!isClosed || !restaurant.is_closed) &&
        (!restaurantReservation || restaurant.transactions.includes("restaurant_reservation")) &&
        (!pickup || restaurant.transactions.includes("pickup")) &&
        (!delivery || restaurant.transactions.includes("delivery"))
    ));

    if (order === "low to high") {
        restaurants.sort((a, b) => {
            if (a[orderBy] === undefined && b[orderBy] === undefined) {
                return 0;
            } else if (a[orderBy] === undefined) {
                return -1;
            } else if (b[orderBy] === undefined) {
                return 1;
            } else if (typeof a[orderBy] === "number") {
                return a[orderBy] - b[orderBy];
            } else if (typeof a[orderBy] === "string") {
                return a[orderBy].length - b[orderBy].length;
            }
        });
    } else if (order === "high to low") {
        restaurants.sort((a, b) => {
            if (a[orderBy] === undefined && b[orderBy] === undefined) {
                return 0;
            } else if (a[orderBy] === undefined) {
                return 1;
            } else if (b[orderBy] === undefined) {
                return -1;
            } else if (typeof a[orderBy] === "number") {
                return b[orderBy] - a[orderBy];
            } else if (typeof a[orderBy] === "string") {
                return b[orderBy].length - a[orderBy].length;
            }
        });
    }
    
    return {
        restaurants: restaurants.slice((page - 1) * 20, page * 20)
    };
};

const mapDispatchToProps = dispatch => {
    return { fetchRestaurants: (location, term, limit) => dispatch(fetchRestaurants(location, term, limit)) };
};

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantIndex);