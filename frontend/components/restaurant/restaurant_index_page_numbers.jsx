import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { toggleRestaurantPage } from '../../actions/restaurant_actions'

const PageNumbers = styled.div`
    display: flex;
    justify-content: space-between;
    width: 630px;
    border-bottom: 1px solid #e6e6e6;
`;

const PageSelector = styled.div`
    display: flex;
`;

const Page = styled.li`
    cursor: pointer;
    color: #0073bb;
    padding: 12px 6px 9px;
    border-bottom: 3px solid transparent;
    font-size: 13px;

    &:hover {
        text-decoration: underline;
    }
`;

const SelectedPage = styled.li`
    color: black;
    padding: 12px 6px 9px;
    border-bottom: 3px solid #d32323;
    font-size: 13px;
`;

const CurrentPage = styled.div`
    color: black;
    padding: 12px 6px 9px;
    font-size: 13px;
`;

const mapStateToProps = state => {
    const totalRestaurants = state.entities.restaurants.length;

    return {
        selectedPage: state.ui.restaurantPageNumber,
        totalRestaurants
    }
}

const mapDispatchToProps = dispatch => {
    return {
        toggleRestaurantPage: page => dispatch(toggleRestaurantPage(page))
    }
}

const RestaurantIndexPageNumbers = ({selectedPage, totalRestaurants, toggleRestaurantPage}) => {
    const handleClick = (page) => {
        return () => {
            toggleRestaurantPage(page);
        }
    }

    const pageNumbers = [];
    const numberOfPageNumbers = 9;
    const totalPages = Math.ceil(totalRestaurants / 20);

    if (selectedPage < numberOfPageNumbers / 2) {
        for (let i = 1; pageNumbers.length < numberOfPageNumbers && pageNumbers.length < totalPages; i++) {
            pageNumbers.push(i);
        }
    } else if (selectedPage <= Math.ceil(totalPages - numberOfPageNumbers / 2)) {
        for (let i = Math.ceil(selectedPage - numberOfPageNumbers / 2); pageNumbers.length < numberOfPageNumbers; i++) {
            pageNumbers.push(i);
        }
    } else {
        for (let i = totalPages - numberOfPageNumbers + 1; pageNumbers.length < numberOfPageNumbers; i++) {
            pageNumbers.push(i);
        }
    }

    const pages = pageNumbers.map(pageNumber => (
        selectedPage === pageNumber ?
        <SelectedPage key={pageNumber}>{pageNumber}</SelectedPage> :
        <Page key={pageNumber} onClick={handleClick(pageNumber)}>{pageNumber}</Page>
    ))

    return (
        <PageNumbers>
            <CurrentPage>{`Page ${selectedPage} of ${totalPages}`}</CurrentPage>
            <PageSelector>
                {
                    selectedPage !== 1 &&
                    <Page onClick={handleClick(selectedPage - 1)}>{"< Previous"}</Page>
                }
                {pages}
                {
                    selectedPage !== totalPages &&
                    <Page onClick={handleClick(selectedPage + 1)}>{"Next >"}</Page>
                }
            </PageSelector>
        </PageNumbers>
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantIndexPageNumbers);