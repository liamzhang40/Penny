import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';

const mapDispatchToProps = dispatch => {
    return {
        logout: () => dispatch(logout())
    }
};

const UserOptionDropdown = ({ logout }) => {
    return (
        <button onMouseDown={() => logout()}>logout</button>
    )
}

export default connect(null, mapDispatchToProps)(UserOptionDropdown);