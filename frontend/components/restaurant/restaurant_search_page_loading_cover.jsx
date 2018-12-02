import React from 'react';
import styled from 'styled-components';

const LoadingBackground = styled.div`
    background-color: hsla(0,0%,100%,.75);
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    z-index: 10;
`;

const RestaurantSearchPageLoadingCover = () => {
    return (
        <LoadingBackground>
            
        </LoadingBackground>
    );
}

export default RestaurantSearchPageLoadingCover;