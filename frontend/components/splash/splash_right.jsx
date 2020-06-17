import React from 'react';
class SplashRight extends React.Component {
    constructor(props) {
        super(props);
    }
    render () {
        return (
            <div className="hours-location-container">
                <ul className="hours-ul">
                    <li id="text-7" className="widget-container widget_text">
                        <h3 className="widget-title">Our Address:</h3>
                        <div className="textwidget">
                            <hr style={{ height: "2px", borderWidth: "0", color: "gray", backgroundColor: "gray" }} />
                            <strong style={{ color: "black" }}>1090 D Detroit Ave
                                <br />
                                <strong style={{ color: "black" }}>Concord, CA 94518</strong>
                            </strong>
                        </div>
                        <strong style={{ color: "black" }}>
                        </strong>
                    </li>
                    <li id="text-10" className="widget-container widget_text">
                        <h3 className="widget-title">
                            <strong style={{ color: "black" }}>Contact Us:</strong>
                        </h3>
                        <strong style={{ color: "black" }}>
                            <div className="textwidget">
                                <hr style={{ height: "2px", borderWidth: "0", color: "gray", backgroundColor: "gray" }} />
                                <strong style={{ color: "black" }}>Call Us: (925) 682-3232
                                    <br />
                                    <strong style={{ color: "black" }}>Email Us at:  </strong>
                                    <a href="mailto:saulortiz40@gmail.com>?Subject=Thank%20you%20for%20emailing%20us" target="_top">Bimmers Support</a>
                                </strong>
                            </div>
                            <strong style={{ color: "black" }}>
                            </strong>
                        </strong>
                    </li>
                    <li id="text-5" className="widget-container widget_text">
                        <h3 className="widget-title">
                            <strong style={{ color: "black" }}>
                                <strong style={{ color: "black" }}>Hours of Operation:</strong>
                            </strong>
                        </h3>
                        <strong style={{ color: "black" }}>

                        </strong>
                        <strong style={{ color: "black" }}>
                        </strong>
                        <div className="textwidget">
                            <hr style={{ height: "2px", borderWidth: "0", color: "gray", backgroundColor: "gray" }} />
                            <strong style={{ color: "black" }}>Monday: 8:00 AM - 6:00 PM</strong>
                            <br />
                            <strong style={{ color: "black" }}>Tuesday: 8:00 AM - 6:00 PM</strong>
                            <br />
                            <strong style={{ color: "black" }}>Wednesday: 8:00 AM - 6:00 PM</strong>
                            <br />
                            <strong style={{ color: "black" }}>Thursday: 8:00 AM - 6:00 PM</strong>
                            <br />
                            <strong style={{ color: "black" }}>Friday: 8:00 AM - 6:00 PM</strong>
                            <br />
                            <strong style={{ color: "black" }}>Saturday: 9:00 AM - 3:00 PM</strong>
                            <br />
                            <strong style={{ color: "black" }}>Sunday: Close</strong>
                        </div>
                    </li>
                </ul>
            </div>
        )
    }
}

export default SplashRight;