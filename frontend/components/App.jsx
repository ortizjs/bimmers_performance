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
import ClientIndexContainer from './clients/clients_index_container';
import ClientShowContainer from './clients/client_show_container'
import ServiceUploadFormContainer from './services/service_upload_form_container';

const App = () => (
    <div className="app-master-div">
            <Route exact path="/" component={SplashContainer} />
            <Route exact path="/services_offered" component={SplashContainer} />
            <Route exact path="/contactus" component={SplashContainer} />
            <AuthRoute exact path="/login" component={LogInFormContainer} />
            <AuthRoute exact path="/signup" component={SignUpFormContainer} />
       
            <ProtectedRoute path="/home" component={GreetingContainer} />
            <ProtectedRoute path="/home" component={TopNavBarContainer} />
            <ProtectedRoute path="/home" component={SideNavBarContainer} />
            <ProtectedRoute path="/clients" component={GreetingContainer} />
            <ProtectedRoute path="/clients" component={TopNavBarContainer} />
            <ProtectedRoute path="/clients" component={SideNavBarContainer} />

            <ProtectedRoute path="/services" component={GreetingContainer} />
            <ProtectedRoute path="/services" component={TopNavBarContainer} />
            <ProtectedRoute path="/services" component={SideNavBarContainer} />

            <ProtectedRoute exact path="/clients" component={ClientIndexContainer} />


            <Switch>
                <ProtectedRoute exact path="/services/new" component={ServiceUploadFormContainer} />
                {/* <ProtectedRoute exact path="/clients/:clientId" component={ServiceShowContainer} /> */}

                <ProtectedRoute exact path="/clients/new" component={ClientUploadFormContainer} />
                <ProtectedRoute exact path="/clients/:clientId" component={ClientShowContainer} />
            </Switch>
    </div>
);
export default App;