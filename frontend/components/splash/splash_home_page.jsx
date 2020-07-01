import React from 'react';
import { Route, Redirect, Switch, Link, HashRoutes} from 'react-router-dom';
import CarouselPhotos from './photo_carousel/carousel';
import "css-loader!react-responsive-carousel/lib/styles/carousel.min.css";


class SplashHomePage extends React.Component {
    constructor(props) {
        super(props);
        
    }

    render() {
        return (
            <div className="splash-page-home-div">
                {/* <div className="splash-page-home-left"> */}
                {/* <CarouselPhotos /> */}
                <div className="temp-car">
                    <img src={window.images.carousel_images_array[0]} />
                </div>
                <span className="splash-home-welcome-span">
                    <span style={{fontSize:"24px"}}>
                        <strong>Welcome to </strong>
                    </span>
                    <span style={{fontSize:"18px"}}>
                        <em>
                            <strong>
                                <span style={{color:'#ff0000', fontSize:'24px'}}>Bimmers</span>
                            </strong>
                            <span style={{fonSize:"24px"}}>
                                <strong> </strong>
                            </span>
                            <strong>
                                <span style={{color:'#0000ff', fontSize:'24px'}}>Performance</span>
                            </strong>
                            <span style={{fontSize:"24px"}}>
                                <strong> </strong>
                            </span>
                            <strong>
                                <span style={{color:"#ff0000", fontSize:"24px"}}>Auto Service</span>
                            </strong>
                        </em>
                    </span>
                </span>
                {/* <p> Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                    Blanditiis assumenda laborum ipsam soluta molestiae iste, 
                    sapiente maiores repellendus ipsa dicta eligendi quasi minus? 
                    Deserunt et eius sit excepturi reprehenderit minus. 
                </p> */}
                <p>
                    &nbsp;
                    <span className="splash-home-business-intro">
                        Bimmers Performance Auto Service has been providing superior automotive repair and maintenance services in 
                        East Bay area for over 15 years
                        &nbsp;
                    </span>
                    <span className="splash-home-business-intro-2">
                        specializing<br/>in BMW and Mercedes Benz vehicle repairs.
                    </span>
                </p>
                <p>
                    &nbsp;
                    <span className="splash-home-business-intro-2">
                        Our specialty is in BMW and Mercedes Benz vehicle repairs and we also provide full service general repairs and 
                        &nbsp;proudly service all other types of vehicles; foreign or domestic. Our technicians are highly trained and 
                        &nbsp;experienced, with the knowledge and skills necessary to handle all of your auto repairs.
                    </span>
                </p>
                <p>
                    &nbsp;
                    <span className="splash-home-business-intro-2">
                        Our team is dedicated to providing you and your vehicle with professional service and exceptional customer care. 
                        &nbsp;
                        THANK YOU for choosing
                        &nbsp;
                    </span>
                    <span className="splash-home-business-intro">
                        Bimmers Performance Auto Service
                    </span>
                    <span className="splash-home-business-intro">
                        Great 
                    </span>
                    <span className="splash-home-business-intro">
                        as your go-to Auto Center!
                        &nbsp;
                    </span>
                </p>
                <div>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <img alt="car_logos" src={this.props.images.car_logos} className="cars-logo-centered"></img>
                
                </div>
                {/* </div> */}
                {/* <div className="splash-page-home-right">

                </div> */}
            </div>
        )
    }
}




export default SplashHomePage;