import React from 'react';
import EmailMessage from './email_message';


class SplashContactUs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            message: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    update(field) {
        return (e) => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const data = Object.assign({}, this.state);
        this.props.submitContactReqToServer('api/contactus', data);
        this.setState({name: '', email: '', message: ''});
    }


    render () {
        return (
            <div className="contact-us-form-container-div">
                <div className="contact-us-form-inner-div">
                    <form onSubmit={this.handleSubmit} className="contact-us-form">
                        <fieldset className="bgColor">
                            <h2 className="contact-us-top-h2">Get In Touch!</h2>
                            <div className="contact-us-form-entry-field-div">
                                <legend>Name</legend>
                                <input type="text" placeholder="Your Name" name="name" onChange={this.update("name")} value={this.state.name} />
                            </div>
                            <div className="contact-us-form-entry-field-div">
                                <legend>Email</legend>
                                <input type="email" placeholder="Your Email" name="email" onChange={this.update("email")} value={this.state.email} />
                            </div>
                            <div className="contact-us-form-entry-field-div">
                                <legend>Message</legend>
                                <textarea type="txtArea" rows="20" cols="70" placeholder="Your Message" name="message" onChange={this.update("message")} value={this.state.message} >

                                </textarea>
                            </div >
                            <div className="submit-buttom-div">
                                <input type="submit" value="Send Email"/>
                            </div>
                        </fieldset >
                    </form>
                    <div>
                        {< EmailMessage />}
                    </div>
                    <div className="contact-us-bottom-div">
                        <h5 > When it comes to problems with your bmw, Bimmers Performance has the solution!</h5>
                    </div>
                </div>
            </div>
        )
    }
}

export default SplashContactUs;