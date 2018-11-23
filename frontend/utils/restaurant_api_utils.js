import $ from 'jquery';

// export const fetchRestaurants = (city, offset) => (
//     $.ajax({
//         headers: {
//             "Authorization": "Bearer A0Q0n0lMAJRX2OmoVbrt84r-x3LGEv3xBaWjzguirKxFuRDQd3HWSlP3PYoDHbuSh8qOVWAfyVjLZin76KIaQqo-yNKfJTUs9KFg5YpnL9IBMqsuxk5wr-ZsmjfOW3Yx"
//         },
//         method: "GET",
//         dataType: "json",
//         url: `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?location=${city}&term=restaurants&limit=20&offset=${offset}`
//     })
// );

export const fetchRestaurants = (location, term, limit = 20) => {
    if (typeof location === "string") {
        return $.ajax({
            data: {
                location,
                term,
                limit
            },
            method: "GET",
            dataType: "json",
            url: "api/biz/yelp/v1/"
        })
    } else {
        const { latitude, longitude } = location;
        return $.ajax({
            data: {
                latitude,
                longitude,
                term,
                limit
            },
            method: "GET",
            dataType: "json",
            url: "api/biz/yelp/v1/"
        })
    }
};
