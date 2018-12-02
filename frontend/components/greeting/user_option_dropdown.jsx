import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { logout } from '../../actions/session_actions';

const DropdownContainer = styled.div`
    position: absolute;
    top: 45px;
    right: 0;
    border-radius: 3px;
    background-color: #fff;
    box-shadow: 0 2px 8px rgba(0,0,0,.2);
`;

const DropdownArrow = styled.div`
    position: relative;

    &:before {
        content: "";
        position: absolute;
        top: -20px;
        right: 10px;
        border: 10px solid transparent;
        border-bottom: 10px solid #fff;
    }
`;

const DropdownPaddingLayer = styled.div`
    padding: 12px;
`;

const DropdownOption = styled.button`
    font-size: 14px;
    color: #0073bb;
    white-space: nowrap;

    &:hover {
        text-decoration: underline;
    }
`;

const mapDispatchToProps = dispatch => {
    return {
        logout: () => dispatch(logout())
    }
};

const UserOptionDropdown = ({ logout }) => {
    return (
        <DropdownContainer>
            <DropdownArrow></DropdownArrow>
            <DropdownPaddingLayer>
                <DropdownOption onMouseDown={() => logout()}>Log Out</DropdownOption>
            </DropdownPaddingLayer>
        </DropdownContainer>
    )
}

export default connect(null, mapDispatchToProps)(UserOptionDropdown);