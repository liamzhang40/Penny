import React from 'react';
import styled from 'styled-components';

const RestaurantListItem = styled.li`
    height: 260px;
    padding: 18px 0;
    border-bottom: 1px solid #e6e6e6;
`;

const RestaurantIndexItem = ({ restaurant }) => {
    return (
        <RestaurantListItem>
            <div>
                <div className="img-container">
                    <img src={restaurant.image_url}/>
                </div>
                <div className="detail-container">
                    <a href={restaurant.url} target="_blank">{restaurant.name}</a>
                    <span>price: {restaurant.price}</span>
                    <span>rating: {restaurant.rating}</span>
                </div>
            </div>
        </RestaurantListItem>
    );
};

export default RestaurantIndexItem;