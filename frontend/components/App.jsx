import React from 'react';
import { Provider } from 'react-redux';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../utils/route_util';
import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';
import SplashContainer from './splash/splash_page';
import GreetingContainer from './greeting/greeting_container';
import TopNavBarContainer from './home_navs/top_nav_container';
import HomeMasterContainerPage from './home/home_master_container';


const App = () => (
    <div className="app-master-div">
        {/* <Switch> */}
            <Route exact path="/" component={SplashContainer} />
            <Route exact path="/services" component={SplashContainer} />
            <Route exact path="/contactus" component={SplashContainer} />
            <AuthRoute exact path="/login" component={LogInFormContainer} />
            <AuthRoute exact path="/signup" component={SignUpFormContainer} />
            <ProtectedRoute path="/" component={GreetingContainer} />
            <ProtectedRoute path="/" component={TopNavBarContainer} />
            {/* <ProtectedRoute path="/home" component={HomeMasterContainerPage} /> */}
            {/* <ProtectedRoute exact path="/services/new" component={ServiceFormContainer}/> */}
        {/* </Switch> */}
    </div>
);
export default App;