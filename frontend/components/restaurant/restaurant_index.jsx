import React from 'react';
import { connect } from 'react-redux';
import { toggleRestaurantLoadingStatus } from '../../actions/restaurant_actions'
import RestaurantIndexItem from './restaurant_index_item';

const mapDispatchToProps = dispatch => {
    return {
        toggleRestaurantLoadingStatus: () => dispatch(toggleRestaurantLoadingStatus())
    }
}

class RestaurantIndex extends React.Component {
    componentDidMount() {
        // location needs to be fetched here first
        navigator.geolocation.getCurrentPosition(position => {
            const {
                latitude,
                longitude
            } = position.coords;
            
            this.props.fetchRestaurants({latitude, longitude} , "restaurant", 50).then(() =>{
                this.props.toggleRestaurantLoadingStatus();
            });
        })
    }

    render() {
        const { restaurants, page } = this.props;

        const list = restaurants.map((restaurant, idx) => (
            <RestaurantIndexItem 
                key={idx} 
                restaurantNumber={(page - 1) * 20 + idx + 1}
                restaurant={restaurant}/>
        ))

        return (
            <ul className="restaurant-index">
                {list}
            </ul>
        );
    }
}

RestaurantIndex.defaultProps = {
    restaurants: []
}

export default connect(null, mapDispatchToProps)(RestaurantIndex);