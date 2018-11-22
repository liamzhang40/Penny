import React from 'react';

const RestaurantIndexPages = () => {
    const pages = new Array(9).map((el, page) => (
        <li key={page}>{page}</li>
    ))

    return (
        <ul>
            {pages}
        </ul>
    );
};

export default RestaurantIndexPages;