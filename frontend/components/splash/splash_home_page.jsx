import React from 'react';
import { Route, Redirect, Switch, Link, HashRoutes} from 'react-router-dom';

class SplashHomePage extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="splash-page-home-div">
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