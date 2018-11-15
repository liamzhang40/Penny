import React from 'react';

class RestaurantFilterOptionsPrice extends React.Component {
    constructor() {
        super();

        this.state = {
            selected: null
        };
    }

    render() {
        const li = ["$", "$$", "$$$", "$$$$"].map(dollar => (
            <li></li>
        ));
        
        return (
            <ul>
            </ul>

        );
    }
}