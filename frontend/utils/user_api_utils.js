import $ from 'jquery';

export const fetchLoginPage = () => (
    $.ajax({
        url: "login/",
        dataType: "html"
    })
);