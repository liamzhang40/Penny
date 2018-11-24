import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { UserATag } from "../styles";
import { logout } from '../../actions/session_actions';

const mapStateToProps = state => {
    return {
        loggedIn: state.session.id
    }
}

const mapDispatchToProps = dispatch => {
    return {
        logout: () => dispatch(logout())
    }
};

const UserATagLogIn = styled(UserATag)`
    margin-left: 20px;

    &:hover {
        background-color: #a71c1c;
    }
`;

const UserATagSignUp = styled(UserATag)`
    margin-left: 5px;
`;

const Greeting = ({loggedIn, logout}) => {
    return (
        <React.Fragment>
            {loggedIn ? 
                <button onClick={() => logout()}>logout</button> :
                <React.Fragment>
                <UserATagLogIn href="login/" buttonColor="#d32323" buttonTextColor="#fff" border="1px solid #bd1f1f">
                    Log In
                    </UserATagLogIn>
                <UserATagSignUp href="signup" buttonColor="#f5f5f5" buttonTextColor="#000" border="1px solid #f5f5f5">
                    Sign Up
                    </UserATagSignUp>
                    </React.Fragment>
            }
        </React.Fragment>
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(Greeting);