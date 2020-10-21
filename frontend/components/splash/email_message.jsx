import React from 'react';
import { connect } from 'react-redux';

class EmailMessage extends React.Component {
    
    showInfo() {
        const { response, message, sendingEmail } = this.props
        return response === true ?
            <div className="contact-us-email-re-message">
                <h2 className="contact-us-email-re-message-h2">{message.message}</h2>
            </div > : sendingEmail === true ?
            <div className="contact-us-email-re-message">> 
                <h2 className="contact-us-email-re-message-h2" > Sending Your Email to Bimmers Performance… </h2>
            </div > :
            <div> 

            </div>
    }


    render() {
        return (
            <div>
                {this.showInfo()}
            </div>
        )
    }
}

function mapStateToProps(state) {
    console.log(state.contacts)
    return {
        message: state.contactus.message,
        sendingEmail: state.contactus.makeReq,
        response: state.contactus.receivedResp
    }
}

export default connect(mapStateToProps, null)(EmailMessage);