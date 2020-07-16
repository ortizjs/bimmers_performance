import React from 'react';
import LocationMap from './location_map';

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
                            <hr className="hours-location-hr" />
                            <strong className="splash-right-textwidget-strong" >1090 D Detroit Ave
                                <br />
                                <strong className="splash-right-textwidget-strong" >Concord, CA 94518</strong>
                            </strong>
                        </div>
                        <strong className="splash-right-textwidget-strong" >
                        </strong>
                    </li>
                    <li id="text-10" className="widget-container widget_text">
                        <h3 className="widget-title">
                            <strong className="splash-right-textwidget-strong" >Contact Us:</strong>
                        </h3>
                        <strong className="splash-right-textwidget-strong" >
                            <div className="textwidget">
                                <hr className="hours-location-hr" />
                                <strong className="splash-right-textwidget-strong" >Call Us: (925) 682-3232
                                    <br />
                                    <strong className="splash-right-textwidget-strong" >Email Us at:  </strong>
                                    <a href="mailto:saulortiz40@gmail.com>?Subject=Thank%20you%20for%20emailing%20us" target="_top">Bimmers Support</a>
                                </strong>
                            </div>
                            <strong className="splash-right-textwidget-strong" >
                            </strong>
                        </strong>
                    </li>
                    <li id="text-5" className="widget-container widget_text">
                        <h3 className="widget-title">
                            <strong className="splash-right-textwidget-strong" >
                                <strong className="splash-right-textwidget-strong" >Hours of Operation:</strong>
                            </strong>
                        </h3>
                        <strong className="splash-right-textwidget-strong" >

                        </strong>
                        <strong className="splash-right-textwidget-strong" >
                        </strong>
                        <div className="textwidget">
                            <hr className="hours-location-hr" />
                            <strong className="splash-right-textwidget-strong-days" >Monday: 8:00 AM - 6:00 PM</strong>
                            <br />
                            <strong className="splash-right-textwidget-strong-days" >Tuesday: 8:00 AM - 6:00 PM</strong>
                            <br />
                            <strong className="splash-right-textwidget-strong-days" >Wednesday: 8:00 AM - 6:00 PM</strong>
                            <br />
                            <strong className="splash-right-textwidget-strong-days" >Thursday: 8:00 AM - 6:00 PM</strong>
                            <br />
                            <strong className="splash-right-textwidget-strong-days" >Friday: 8:00 AM - 6:00 PM</strong>
                            <br />
                            <strong className="splash-right-textwidget-strong-days" >Saturday: 9:00 AM - 3:00 PM</strong>
                            <br />
                            <strong className="splash-right-textwidget-strong-days" >Sunday: Closed</strong>
                        </div>
                    </li>
                    <li id="text-12" className="widget-container widget_text">
                        <strong className="splash-right-textwidget-strong">
                            <strong className="splash-right-textwidget-strong">			
                                <div className="textwidget">
                                    <img className="shuttle-img" alt="" src={window.images.shuttle_img} align="middle"/>
                                    &nbsp;
                                    <p></p>
                                </div>
		                    </strong>
                        </strong>
                    </li>
                    <li id="text-8" className="widget-container widget_text">
                        <h3 className="widget-title">
                            <strong className="splash-right-textwidget-strong">
                                <strong className="splash-right-textwidget-strong">Our Location:</strong>
                            </strong>
                        </h3>
                        <strong className="splash-right-textwidget-strong">
                            <strong className="splash-right-textwidget-strong">			
                                <div className="textwidget">
                                    <hr className="hours-location-hr"/>
                                </div>
                            </strong>
                        </strong>
                    </li>
                    <LocationMap/>
                </ul>
            </div>
        )
    }
}

export default SplashRight;