import React from 'react';
import styled from 'styled-components';
import { UserATag } from "../styles";

const UserATagLogIn = styled(UserATag)`
    margin-left: 20px;

    &:hover {
        background-color: #a71c1c;
    }
`;

const UserATagSignUp = styled(UserATag)`
    margin-left: 5px;
`;

const Greeting = () => {
    return (
        <React.Fragment>
            <UserATagLogIn href="login/" buttonColor="#d32323" buttonTextColor="#fff" border="1px solid #bd1f1f">
                Log In
                </UserATagLogIn>
            <UserATagSignUp href="signup" buttonColor="#f5f5f5" buttonTextColor="#000" border="1px solid #f5f5f5">
                Sign Up
                </UserATagSignUp>
        </React.Fragment>
    );
}

export default Greeting;