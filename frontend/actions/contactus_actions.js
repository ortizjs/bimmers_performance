export const MAKE_API_REQUEST_TO_SEND_EMAIL = "MAKE_API_REQUEST_TO_SEND_EMAIL"; 
export const CLEAR_EMAIL_DETAILS = "CLEAR_EMAIL_DETAILS"; 
export const RECEIVED_RESPONSE = "RECEIVED_RESPONSE"; 
export const SENT_EMAIL = "SENT_EMAIL"; 
export const ERROR_EMAIL = "ERROR_EMAIL";

export const make_api_request_to_send_email = () => ({
    type: MAKE_API_REQUEST_TO_SEND_EMAIL
});

export const clear_email_details = () => ({
    type: CLEAR_EMAIL_DETAILS
});

export const received_response = () => ({
    type: RECEIVED_RESPONSE
});

export const sent_email = (data) => ({
    type: SENT_EMAIL,
    data
});

export const error_email = () => ({
    type: ERROR_EMAIL
});

export function submitContactReqToServer(url, data) {
    return dispatch => {
        dispatch(make_api_request_to_send_email());
        dispatch(clear_email_details());
        return fetch(url, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ data })
        }).then(response => response.json()).then(emailMessage => {
            dispatch(received_response());
            dispatch(sent_email(emailMessage));
        }).catch(err => dispatch(error_email()));
    }
}