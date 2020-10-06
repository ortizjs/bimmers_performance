import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { login, clearErrors } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = ({ errors }) => {
    return {
        errors: errors.session,
        formType: 'login',
        navLink: <Link to="/signup">Sign Up</Link>,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        processForm: (user) => dispatch(login(user)),
        clearErrors: () => dispatch(clearErrors())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);


// window.currentUser = {
//     id: 1,
//     name: "Jonnatan",
//     email: "jonnatano94@gmail.com",
//     username: "brotiz_94",
//     session_token: "svD9aDYwCKDLc6T6JKraQg",
//     password_digest: "$2a$12$zPV9vni5fAKwoOdwsJ9/GOy4AODKc3kuQ4y.k.5aWo42unsQRACGy"}