import React from 'react';
import styled from 'styled-components';

const PageNumbers = styled.ul`
    display: flex;
    width: 630px;
    border-bottom: 1px solid #e6e6e6;
`;

const Page = styled.li`
    cursor: pointer;
    padding: 12px 6px 9px;
    border-bottom: 3px solid transparent;
    font-size: 13px;
`;

class RestaurantIndexPageNumbers extends React.Component {
    
    handleClick = e => {
        
    }

    render() {
        const pages = new Array(9).fill(undefined).map((el, page) => (
            <Page key={page}>{page + 1}</Page>
        ))
    
        return (
            <PageNumbers onClick={handleClick}>
                {pages}
            </PageNumbers>
        );

    }
};

export default RestaurantIndexPageNumbers;