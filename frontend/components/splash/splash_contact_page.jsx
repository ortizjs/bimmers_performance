import React from 'react';


class SplashContactUs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            message: ''
        };
    }

    update(field) {
        return (e) => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const data = Object.assign({}, this.state);
        this.props.submitContactReqToServer('api/contacus');
        this.setState({name: '', email: '', message: ''});
    }


    render () {
        return (
            <div className="contact-us-form-container-div">
                <div className="contact-us-form-inner-div">
                    <form>
                        
                    </form>
                </div>
            </div>
        )
    }
}

export default SplashContactUs;