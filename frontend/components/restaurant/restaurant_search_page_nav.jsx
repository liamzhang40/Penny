import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { Button, Label } from '../styles';
import { fetchRestaurants } from '../../actions/restaurant_actions';
import Greeting from '../greeting/greeting';

const Span = styled.span`
    margin-right: 10px;
    font-weight: 700;
`;

const LabelRight = styled(Label)`
    border-radius: 0;
    position: relative;

    &:before {
        content: "";
        position: absolute;
        left: 0;
        width: 1px;
        height: 18px;
        background-color: #ccc;
    }
`;

const Input = styled.input`
    width: 250px;
`;

const SearchButton = styled(Button)`
    padding: 6px 12px;
    border-radius: 0 4px 4px 0;
`;

const RestaurantTopNavBar = styled.nav`
    min-width: 1020px;
    height: 64px;
    background-color: #d32323;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const RestaurantNavContainer = styled.div`
    min-width: 1000px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const RestaurantSearchForm = styled.form`
    display: flex;
    justify-content: center;
    align-items: center; 
`;

const mapDispatchToProps = dispatch => {
    return {
        fetchRestaurants: (location, offset) => dispatch(fetchRestaurants(location, offset))
    };
};

class RestaurantSearchPageNav extends React.Component {
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
            this.setState({ [field]: e.currentTarget.value});
        };
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.fetchRestaurants(this.state.location, 0);
    }

    render() {
        return <RestaurantTopNavBar>
            <RestaurantNavContainer>
              <RestaurantSearchForm onSubmit={this.handleSubmit}>
                <Label>
                  <Span>Find</Span>
                  <Input type="text" placeholder="chinese, lunch, ramen" onChange={this.update("term")} />
                </Label>
                <LabelRight>
                  <Span>Near</Span>
                  <Input type="text" placeholder="location" onChange={this.update("location")} />
                </LabelRight>
                <SearchButton>
                  <svg viewBox="0 0 24 24" width="20px">
                    <path d="M20.753 19.34l-4.295-4.297A7.46 7.46 0 0 0 18 10.5a7.5 7.5 0 1 0-7.5 7.5 7.46 7.46 0 0 0 4.543-1.542l4.296 4.295a1 1 0 1 0 1.412-1.414zM10.5 16A5.506 5.506 0 0 1 5 10.5C5 7.467 7.467 5 10.5 5S16 7.467 16 10.5 13.533 16 10.5 16z" />
                  </svg>
                </SearchButton>
              </RestaurantSearchForm>
              <Greeting />
            </RestaurantNavContainer>
          </RestaurantTopNavBar>;
    }
}

export default connect(null, mapDispatchToProps)(RestaurantSearchPageNav);