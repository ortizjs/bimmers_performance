import merge from 'lodash/merge';

import {MAKE_API_REQUEST_TO_SEND_EMAIL, CLEAR_EMAIL_DETAILS, RECEIVED_RESPONSE, SENT_EMAIL, ERROR_EMAIL} from '../actions/contactus_actions';

const contactUsReducer = (oldState = { message: {}, makeReq: false, errorRec: false, receivedResp: false }, action) => {
    Object.freeze(oldState);
    switch(action.type) {
        case MAKE_API_REQUEST_TO_SEND_EMAIL:
            return merge({}, oldState, {makeReq: true});
        case CLEAR_EMAIL_DETAILS:
            return merge({}, oldState, { message: {}, receivedResp: false });
        case RECEIVED_RESPONSE:
            return merge({}, oldState, { receivedResp: true});
        case SENT_EMAIL:
            return merge({}, oldState, { message: action.data });
        case ERROR_EMAIL:
            return merge({}, oldState, {errorRec: true});
        default: 
            return oldState;
    }
};

export default contactUsReducer;