import React from 'react';
import { Provider } from 'react-redux';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../utils/route_util';
import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';
import SplashContainer from './splash/splash_page';
import GreetingContainer from './greeting/greeting_container';
import TopNavBarContainer from './home_navs/top_nav_container';
import SideNavBarContainer from './home_navs/side_nav_container';
import HomeMasterContainerPage from './home/home_master_container';
import ClientUploadFormContainer from './clients/client_upload_form_container';


function determineLocationHack() {
    let landingPages = ["", "services", "contactus"]
    if (landingPages.includes(window.location.hash.slice(2))) {
        return "no-render"
    } else {
        return window.location.hash.slice(2);
    }
}

const App = () => (
    <div className="app-master-div">
        {/* <Switch> */}
            <Route exact path="/" component={SplashContainer} />
            <Route exact path="/services" component={SplashContainer} />
            <Route exact path="/contactus" component={SplashContainer} />
            <AuthRoute exact path="/login" component={LogInFormContainer} />
            <AuthRoute exact path="/signup" component={SignUpFormContainer} />
            {/* <ProtectedRoute path={`/${determineLocationHack()}`} component={GreetingContainer} />
            <ProtectedRoute path={`/${determineLocationHack()}`} component={TopNavBarContainer} />
            <ProtectedRoute path={`/${determineLocationHack()}`} component={SideNavBarContainer} /> */}
            <ProtectedRoute path="/home" component={GreetingContainer} />
            <ProtectedRoute path="/home" component={TopNavBarContainer} />
            <ProtectedRoute path="/home" component={SideNavBarContainer} />
            <ProtectedRoute path="/clients" component={GreetingContainer} />
            <ProtectedRoute path="/clients" component={TopNavBarContainer} />
            <ProtectedRoute path="/clients" component={SideNavBarContainer} />
            <ProtectedRoute path="/clients/new" component={ClientUploadFormContainer} />
        {/* </Switch> */}
    </div>
);
export default App;