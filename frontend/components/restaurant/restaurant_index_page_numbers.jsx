import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { toggleRestaurantPage } from '../../actions/restaurant_actions'

const PageNumbers = styled.ul`
    display: flex;
    width: 630px;
    border-bottom: 1px solid #e6e6e6;
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

const mapStateToProps = state => {
    return {
        selectedPage: state.ui.restaurantPageNumber
    }
}

const mapDispatchToProps = dispatch => {
    return {
        toggleRestaurantPage: page => dispatch(toggleRestaurantPage(page))
    }
}

const RestaurantIndexPageNumbers = ({selectedPage, toggleRestaurantPage}) => {
    const handleClick = (page) => {
        return () => {
            toggleRestaurantPage(page);
        }
    }

    const pages = new Array(9).fill(undefined).map((el, page) => (
        selectedPage === page + 1 ?
        <SelectedPage key={page}>{page + 1}</SelectedPage> :
        <Page key={page} onClick={handleClick(page + 1)}>{page + 1}</Page>
    ))

    return (
        <PageNumbers>
            {pages}
        </PageNumbers>
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantIndexPageNumbers);