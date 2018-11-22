import React from 'react';
import RestaurantIndexItem from './restaurant_index_item';

class RestaurantIndex extends React.Component {
    componentDidMount() {
        // location needs to be fetched here first
        navigator.geolocation.getCurrentPosition(position => {
            const {
                latitude,
                longitude
            } = position.coords;

            this.props.fetchRestaurants({latitude, longitude} , "restaurant", 50);
        })
    }

    render() {
        const { restaurants } = this.props;

        const list = restaurants ? restaurants.map((restaurant, idx) => (
            <RestaurantIndexItem 
                key={idx} 
                restaurant={restaurant}/>
        )) :
        [];

        return (
            <ul className="restaurant-index">
                {list}
            </ul>
        );
    }
}

export default RestaurantIndex;