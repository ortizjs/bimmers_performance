import React from 'react';
import { connect } from 'react-redux';

class EmailMessage extends React.Component {
    
    showInfo() {
        const { response, message, sendingEmail } = this.props
        return response === true ?
            (<div>
                <h2 className="uk-text-center uk-position-center textDown">{message.message}</h2>
            </div >) : sendingEmail === true ?
            (<div> 
                <h2 className="uk-text-center uk-position-center textDown" > Sending Your Email to Trushal Chitalia… </h2>
            </div >) :
            (<div> 

            </div>)
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
        response: state.contactus.recvdResp
    }
}

export default connect(mapStateToProps, null)(EmailMessage);