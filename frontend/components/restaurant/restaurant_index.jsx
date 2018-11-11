import React from 'react';
import styled from 'styled-components';
import RestaurantIndexItem from './restaurant_index_item';
import RestaurantFilterOptions from './restaurant_filter_options';

const RestaruantBodyContainer = styled.div`
    min-width: 1020px;
`;

const RestaruantBody = styled.div`
    min-width: 1000px;
`;

class RestaurantIndex extends React.Component {
    constructor() {
        super();

        this.offset = 0;
    }

    componentDidMount() {
        this.props.fetchRestaurants("New York", 0);
    }

    componentWillReceiveProps(nextProps, nextState) {
        // if (nextProps.city !== this.props.city) {
        //     this.offset = 0;
        // }
    }

    handleClick(pageNumber) {
        // return () => {
        //     this.offset = (pageNumber - 1) * 20;  
        //     fetchRestaurants(this.props.city, this.offset).then( response => {
        //         this.props.setParentState(response.businesses);
        //     });
        // };
    } 

    render() {
        const { restaurants } = this.props;

        const list = restaurants ? restaurants.map((restaurant, idx) => (
            <RestaurantIndexItem 
                key={idx} 
                restaurant={restaurant}/>
        )) :
        [];
    
        const page = new Array(10).fill().map((el, idx) => (
            <li 
                key={idx} 
                onClick={this.handleClick(idx + 1)}
                className={this.offset / 20 === idx ? "selected-page" : ""}>
                <span>{idx + 1}</span>
            </li>
        ));

        return (
            <RestaruantBodyContainer>
                <RestaruantBody>
                    <RestaurantFilterOptions />

                    <ul className="restaurant-index">
                        {list}
                    </ul>
                    { restaurants &&
                        <div className="page-bottom">
                            <span>Pages:</span>
                            <ul className="page-numbers">
                                {page}
                            </ul>
                        </div>
                    }
                </RestaruantBody>
            </RestaruantBodyContainer>
        );
    }
}

export default RestaurantIndex;