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
                {/* { debugger } */}
                <Carousel 
                slideIndex={0}
                photos={window.images.carousel_images_array}
                />
                <p> Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                    Blanditiis assumenda laborum ipsam soluta molestiae iste, 
                    sapiente maiores repellendus ipsa dicta eligendi quasi minus? 
                    Deserunt et eius sit excepturi reprehenderit minus. 
                </p>

                
            </div>
        )
    }
}




export default SplashHomePage;