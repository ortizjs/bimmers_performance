import React from 'react';
import SplashNav from './splash_nav';
import { Route, Redirect, Switch, Link, HashRouter } from "react-router-dom";
import SplashHome from './splash_home_page';
import SplashRight from './splash_right';
import SplashService from './splash_service_page';
import SplashContactUsContainer from './splash_contact_container'

class Splash extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            active: "home"
        };
    }

    componentDidMount() {
        // let navbar = $(".splash-nav-ul .active")[0].id
        // this.setState({avtive: navbar});
        // this.componentToRender(navbar);
    }

    // componentToRender() {
    //     let component = this.state.active;
    //     switch(component) {
    //         case "home":
    //             return <SplashHome/>;
    //         case "sevices":
    //             return <SplashService/>;
    //         default:
    //             return null;
    //     }
    // }

    render() {
        return (
            <div className="splash-page-main-div">
                <br/>
                <div className="logo-inbody-container-div">
                    <img src={window.images.splash_banner_logo} alt="Logo" className="site-banner-inbody"></img>
                </div>
                <div className="splash-body-div">
                    <div className="splash-nav-container">
                        <SplashNav />
                    </div>
                    <div className="splash-body-left">
                        <Switch>
                            <Route exact path="/" component={SplashHome} />
                            <Route exact path="/services_offered" component={SplashService} />
                            <Route exact path="/contactus" component={SplashContactUsContainer} />
                        </Switch>
                    </div>
                    <div className="splash-body-right">
                        <SplashRight/>
                    </div>
                </div>
                <hr className="splash-page-main-div-hr" align="center"/>
            </div>
        )
    }
}
export default Splash;