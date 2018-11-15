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
`;

const RestaurantContactLeft = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    width: 62.5%;
`;

const RestaurantContactRight = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    width: 37.5%;
`;

const RestaurantContactSpan = styled.span`
    font-size: 14px;
    margin-bottom: 5px;
`;

const RestaurantContactSpanRate = styled(RestaurantContactSpan)`
    color: #666;
`;

const RestaurantName = styled.a`
    margin-bottom: 5px;
    font-weight: 700;
    color: #0073bb;
    
    &:hover {
        text-decoration: underline;
    }
`;

const RestaurantDescription = styled.p`

`;

const RestaurantIndexItem = ({ restaurant }) => {
    const restaurantCategories = restaurant.categories.map((category,idx) => (
        <RestaurantContactSpan key={idx}>
            {idx === restaurant.categories.length - 1 ?
            category.title : 
            `${category.title}, `}
        </RestaurantContactSpan>
    ));

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
                        <RestaurantName href={restaurant.url} target="_blank">{restaurant.name}</RestaurantName>
                        <RestaurantContactSpanRate>rating: {restaurant.rating}</RestaurantContactSpanRate>
                        <div>
                            <RestaurantContactSpan>{restaurant.price}</RestaurantContactSpan>
                            {restaurantCategories}
                        </div>
                    </RestaurantContactLeft>
                    <RestaurantContactRight>
                        <RestaurantContactSpan>{restaurant.display_phone}</RestaurantContactSpan>                    
                        <RestaurantContactSpan>{restaurant.location.display_address[0]}</RestaurantContactSpan>
                        <RestaurantContactSpan>{restaurant.location.display_address[1]}</RestaurantContactSpan>
                    </RestaurantContactRight>
                </RestaurantContactContainer>
                <RestaurantDescription>
                    
                </RestaurantDescription>
            </div>
        </RestaurantListItem>
    );
};

export default RestaurantIndexItem;