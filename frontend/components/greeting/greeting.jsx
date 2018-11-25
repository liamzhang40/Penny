import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { UserATag } from '../styles';
import DropdownButton from '../button/dropdown_button';
import UserOptionDropdown from '../greeting/user_option_dropdown';

const UserATagLogIn = styled(UserATag)`
    margin-left: 20px;

    &:hover {
        background-color: #a71c1c;
    }
`;

const UserATagSignUp = styled(UserATag)`
    margin-left: 5px;
`;

const Svg = styled.svg`
    width: 14px;
`;

const mapStateToProps = state => {
    return {
        loggedIn: state.session.id
    }
}

const Greeting = ({loggedIn}) => {
    return (
        <div>
            {loggedIn ? 
            <DropdownButton 
                type="user" 
                buttonContent={() => <Svg viewBox="0 0 14 14"><path d="M7 9L3.5 5h7L7 9z" /></Svg>}
                dropdownContent={() => <UserOptionDropdown />} /> :
            <React.Fragment>
                <UserATagLogIn href="login/" buttonColor="#d32323" buttonTextColor="#fff" border="1px solid #bd1f1f">
                    Log In
                </UserATagLogIn>
                <UserATagSignUp href="signup" buttonColor="#f5f5f5" buttonTextColor="#000" border="1px solid #f5f5f5">
                    Sign Up
                </UserATagSignUp>
            </React.Fragment>
            }
        </div>
    );
}

export default connect(mapStateToProps)(Greeting);