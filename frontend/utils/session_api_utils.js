import $ from 'jquery';

export const logout = () => (
    $.ajax({
        method: "DELETE",
        url: "logout"
    })
)