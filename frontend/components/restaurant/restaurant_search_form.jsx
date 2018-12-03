import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { Button, Label } from '../styles';
import { fetchRestaurants, toggleRestaurantLoadingStatus } from '../../actions/restaurant_actions';
import RestaurantSearchFormInput from './restaurant_search_form_input';

const RestaurantSearchFormStyled = styled.form`
    display: flex;
    justify-content: center;
    align-items: center; 
`;

const SearchButton = styled(Button)`
    padding: 6px 12px;
    border-radius: 0 4px 4px 0;
`;

const mapDispatchToProps = dispatch => {
    return {
        fetchRestaurants: (location, offset) => dispatch(fetchRestaurants(location, offset)),
        toggleRestaurantLoadingStatus: () => dispatch(toggleRestaurantLoadingStatus())
    };
};

class RestaurantSearchForm extends React.Component {
    constructor() {
        super();

        this.state = {
            term: "",
            location: ""
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field) {
        return e => {
            this.setState({ [field]: e.currentTarget.value });
        };
    }

    handleSubmit(e) {
        e.preventDefault();

        const { location, term } = this.state;
        const { fetchRestaurants, toggleRestaurantLoadingStatus } = this.props;
        toggleRestaurantLoadingStatus();
        fetchRestaurants(location, term, 0).then(() => {
            toggleRestaurantLoadingStatus();
        });
    }

    render() {
        return (
            <RestaurantSearchFormStyled onSubmit={this.handleSubmit}>
                <RestaurantSearchFormInput 
                    labelContent="Find" 
                    placeholder="chinese, lunch, ramen"
                    setParentState={this.update("term")} />
                <RestaurantSearchFormInput
                    labelContent="Near"
                    placeholder="location"
                    setParentState={this.update("location")} />
                <SearchButton>
                    <svg viewBox="0 0 24 24" width="20px">
                        <path d="M20.753 19.34l-4.295-4.297A7.46 7.46 0 0 0 18 10.5a7.5 7.5 0 1 0-7.5 7.5 7.46 7.46 0 0 0 4.543-1.542l4.296 4.295a1 1 0 1 0 1.412-1.414zM10.5 16A5.506 5.506 0 0 1 5 10.5C5 7.467 7.467 5 10.5 5S16 7.467 16 10.5 13.533 16 10.5 16z" />
                    </svg>
                </SearchButton>
            </RestaurantSearchFormStyled>
        );
    }
}

export default connect(null, mapDispatchToProps)(RestaurantSearchForm);