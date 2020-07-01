import React from 'react';
import SplashNav from './splash_nav';
import { Route, Redirect, Switch, Link, HashRouter } from "react-router-dom";
import SplashHome from './splash_home_page';
import SplashRight from './splash_right';

class Splash extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="splash-page-main-div">
                <br/>
                <div className="logo-inbody-container-div">
                    <img src={window.images.splash_banner_logo} alt="Logo" className="site-banner-inbody"></img>
                </div>
                <div className="splash-body-div">
                    <SplashNav />
                    <div className="splash-body-left">
                        <SplashHome 
                        images={window.images}/> 
                    </div>
                    <div className="splash-body-right">
                        <SplashRight/>
                    </div>
                </div>
                {/* <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis aliquam magni quis modi assumenda totam exercitationem odit maiores sed sapiente, mollitia voluptates, doloremque velit, eos nesciunt alias delectus quia a.</p> */}

                {/* <div className="splash-nav-container">
                    <SplashNav/>
                </div>
                <div className="splash-home-container">
                    <SplashHome/>
                </div> */}
                <hr className="splash-page-main-div-hr" align="center"/>
            </div>
        )
    }
}
export default Splash;