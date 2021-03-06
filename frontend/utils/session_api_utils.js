import $ from 'jquery';

const getCookie = cname => {
    const cookie = decodeURIComponent(document.cookie).split("; ");
    for (let i in cookie) {
        if (cookie[i].substring(0, cname.length) === cname) {
            return cookie[i].substring(cname.length + 1, cookie[i].length);
        }
    }
    return null;
};

export const logout = () => {
    // debugger
    return $.ajax({
        method: "DELETE",
        url: "logout",
        headers: {
            'X-CSRFToken': getCookie("csrftoken")
        }
    })
}
