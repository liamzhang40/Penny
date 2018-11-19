import React from 'react';

const UserButton = ({ buttonText, buttonColor }) => {
    console.log(history);
    return (
        <a href={`${buttonText}/`}>{buttonText}</a>
    );
};

export default UserButton;