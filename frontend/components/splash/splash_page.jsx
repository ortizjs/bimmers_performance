import React from 'react';
import SplashNav from './splash_nav';
import { Route, Redirect, Switch, Link, HashRouter } from "react-router-dom";
import SplashHomePage from './splash_home_page';
import SplashRight from './splash_right';
import SplashServicePage from './splash_service_page';
import SplashContactUsPage from './splash_contact_page'

class Splash extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            active: "home"
        };
    }

    componentDidMount() {
        // debugger
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
                        <SplashNav/>
                    </div>
                    {/* <SplashHome 
                    images={window.images}
                    />  */}
                    <div className="splash-body-left">
                        <Switch>
                            <Route exact path="/" component={SplashHomePage} />
                            <Route exact path="/services" component={SplashServicePage} />
                            <Route exact path="/contactus" component={SplashContactUsPage} />
                        </Switch>

                        {/* <SplashService/> */}

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