import $ from 'jquery';

export const fetchRestaurants = (city, offset) => (
    $.ajax({
        headers: {
            "Authorization": "Bearer A0Q0n0lMAJRX2OmoVbrt84r-x3LGEv3xBaWjzguirKxFuRDQd3HWSlP3PYoDHbuSh8qOVWAfyVjLZin76KIaQqo-yNKfJTUs9KFg5YpnL9IBMqsuxk5wr-ZsmjfOW3Yx"
        },
        method: "GET",
        dataType: "json",
        url: `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?location=${city}&term=restaurants&limit=20&offset=${offset}`
    })
);

export const DjangoFetchRestaurants = (city, offset) => (
    $.ajax({
        method: "GET",
        dataType: "json",
        url: "api/restaurants/v1"
    })
);

// will only send info to backend in future, and backend will send API request