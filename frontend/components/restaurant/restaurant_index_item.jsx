import React from 'react';
import styled from 'styled-components';
import { Img } from '../styles';

const RestaurantListItem = styled.li`
    height: 260px;
    padding: 18px 0;
    border-bottom: 1px solid #e6e6e6;

    :first-child {
        border-top: 1px solid #e6e6e6;
    }
`;

const ImgContainer = styled.div`
    border-radius: 4px;
    overflow: hidden;
    height: 210px;
    width: 210px;
`;

const RestaurantIndexItem = ({ restaurant }) => {
    return (
        <RestaurantListItem>
            <div>
                <ImgContainer>
                    <Img src={restaurant.image_url}/>
                </ImgContainer>
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