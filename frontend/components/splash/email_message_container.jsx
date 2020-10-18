import { connect } from "react-redux";
import React from "react";

const mapStateToProps = ({state}) => {
    console.log(state.contacts);
    return {
        message: state.contacts.message,
        sendingEmail: state.contacts.makeReq
    }
}