import React from 'react';

class SplashContactUsPage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="splash-page-contact-us-div">
                <h1 className="title">Contact Us</h1>
                    <div className="content">
                        <p>
                            &nbsp;Give us a call or send us an email and we will responde as soon as possible:&nbsp;
                        </p>
                    </div>
            </div>
        )
    }
}

export default SplashContactUsPage;
