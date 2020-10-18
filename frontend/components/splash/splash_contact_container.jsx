import { connect } from 'react-redux';
import React from 'react';
import { submitContactReqToServer } from '../../actions/contactus_actions';
import ContactUsForm from './splash_contact_page';

// const mapStateToProps = ({ })

const mapDispatchToProps = dispatch => {
    return {
        submitContactReqToServer: (path, data) => dispatch(submitContactReqToServer(path, data))
    };
};

export default connect(null, mapDispatchToProps)(ContactUsForm)