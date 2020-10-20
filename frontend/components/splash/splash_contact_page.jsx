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
                    <form onSubmit={this.handleSubmit}>
                        <fieldset className="bgColor">
                            <h2 className="uk-text-center">Get In Touch!</h2>
                            <div className="uk-form-row">
                                <legend>Name</legend>
                                <input className="uk-form-large" type="text" placeholder="Your Name" name="name" onChange={this.update("name")} value={this.state.name} />
                            </div>
                            <div className="uk-form-row">
                                <legend>Email</legend>
                                <input className="uk-form-large" type="email" placeholder="Your Email" name="email" onChange={this.update("email")} value={this.state.email} />
                            </div>
                            <div className=" uk-form-row">
                                <legend>Message</legend>
                                <textarea className="uk-form-large" type="txtArea" rows="10" cols="70" placeholder="Your Message" name="message" onChange={this.update("message")} value={this.state.message} >

                                </textarea>
                            </div >
                            <input type="submit" value="Send Email"/>
                        </fieldset >
                    </form>
                    <div>
                        {< EmailMessage />}
                    </div>
                    <div className="uk-text-center uk-position-bottom">
                        <h5 > When it comes to problems with your bmw, Bimmers Performance has the solution!</h5>
                    </div>
                </div>
            </div>
        )
    }
}

export default SplashContactUs;