import React from 'react';
import styled from 'styled-components';
import { Img } from '../styles';

const RestaurantListItem = styled.li`
    display: flex;
    justify-content: space-between;
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

const RestaurantContactContainer = styled.div`
    width: 400px;
    display: flex;
    justify-content: space-between;
`;

const RestaurantContactLeft = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
`;

const RestaurantContactRight = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
`;

const RestaurantDescription = styled.p`
`;

const RestaurantIndexItem = ({ restaurant }) => {
    return (
        <RestaurantListItem>
            <div>
                <ImgContainer>
                    <Img src={restaurant.image_url}/>
                </ImgContainer>
            </div>
            <div>
                <RestaurantContactContainer>
                    <RestaurantContactLeft>
                        <a href={restaurant.url} target="_blank">{restaurant.name}</a>
                        <span>price: {restaurant.price}</span>
                        <span>rating: {restaurant.rating}</span>
                    </RestaurantContactLeft>
                    <RestaurantContactRight>
                        <span>{restaurant.display_phone}</span>                    
                        <span>{restaurant.location.display_address[0]}</span>
                        <span>{restaurant.location.display_address[1]}</span>
                    </RestaurantContactRight>
                </RestaurantContactContainer>
                <RestaurantDescription>
                    
                </RestaurantDescription>
            </div>
        </RestaurantListItem>
    );
};

export default RestaurantIndexItem;