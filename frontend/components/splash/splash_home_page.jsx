import React from 'react';
import { Route, Redirect, Switch, Link, HashRoutes} from 'react-router-dom';
import Carousel from './photo_carousel/carousel';

class SplashHomePage extends React.Component {
    constructor(props) {
        super(props);
        
    }

    componentDidMount() {
        // debugger

    }
    render() {
        // debugger
        return (
            <div className="splash-page-home-div">
                <div className="splash-page-home-left">
                    <Carousel 
                    slideIndex={0}
                    photos={window.images.carousel_images_array}
                    />
                    <span className="splash-home-welcome-span">
                        <span style={{fontSize:"24px"}}>
                            <strong>Welcome to </strong>
                        </span>
                        <span style={{fontSize:"18px"}}>
                            <em>
                                <strong>
                                    <span style={{color:'#ff0000'},{fontSize:'24px'}}>Bimmers</span>
                                </strong>
                                <span style={{fonSize:"24px"}}>
                                    <strong> </strong>
                                </span>
                                <strong>
                                    <span style={{color:'#0000ff'},{fontSize:'24px'}}>Performance</span>
                                </strong>
                                <span style={{fontSize:"24px"}}>
                                    <strong> </strong>
                                </span>
                                <strong>
                                    <span style={{color:"#ff0000"},{fontSize:"24px"}}>Auto Service</span>
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
                        <span class="splash-home-business-intro">
                            Bimmers Performance Auto Service has been providing superior automotive repair and maintenance services in 
                            East Bay area for over 15 years
                            {/* &nbsp; */}
                        </span>
                        <span className="splash-home-business-intro">
                            specializing<br/>in BMW and Mercedes Benz vehicle repairs.
                        </span>
                    </p>

                </div>

                
            </div>
        )
    }
}




export default SplashHomePage;