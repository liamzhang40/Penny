import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { fetchRestaurants } from '../../actions/restaurant_actions';

const mapDispatchToProps = dispatch => {
    return {
        fetchRestaurants: (city, offset) => dispatch(fetchRestaurants(city, offset))
    };
};

const Button = styled.button`
    background-color: #bd1f1f;
    border: 1px solid #ccc;
`;

class CityInput extends React.Component {
    constructor() {
        super();
        
        this.state = {
            city: ""
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
        this.props.fetchRestaurants(this.state.city, 0);
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label className="city-search-label">
                    Find Restaurants Near
                    <input
                        className="city-search"
                        type="text"
                        placeholder="city name"
                        onChange={this.update("city")} />
                </label>
                <Button>
                    <svg viewBox="0 0 24 24" width="20px">
                        <path d="M20.753 19.34l-4.295-4.297A7.46 7.46 0 0 0 18 10.5a7.5 7.5 0 1 0-7.5 7.5 7.46 7.46 0 0 0 4.543-1.542l4.296 4.295a1 1 0 1 0 1.412-1.414zM10.5 16A5.506 5.506 0 0 1 5 10.5C5 7.467 7.467 5 10.5 5S16 7.467 16 10.5 13.533 16 10.5 16z"/>
                    </svg>
                </Button>
            </form>
        );
    }
}

export default connect(null, mapDispatchToProps)(CityInput);