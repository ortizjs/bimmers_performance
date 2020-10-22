import React from 'react';
import { Provider } from 'react-redux';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../utils/route_util';
import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';
import SplashContainer from './splash/splash_page';
import GreetingContainer from './greeting/greeting_container';


const App = () => (
    <div className="app-master-div">
        <header>
            <div className="banner-logo-div">
                <Link to="/" className="header-link">
                    {/* <h1>BIMMERS PERFORMANCE AUTO SERVICE!</h1> */}
                    {/* <img src={window.images.splash_banner_logo} alt="Logo" className="site-banner-header"></img> */}
                </Link>
            </div>
        </header>
        <Switch>
            <Route exact path="/" component={SplashContainer} />
            <Route exact path="/services" component={SplashContainer} />
            <Route exact path="/contactus" component={SplashContainer} />
            {/* <Route exact path="/" component={}/> */}
            <ProtectedRoute path="/home" component={GreetingContainer} />
            <AuthRoute exact path="/login" component={LogInFormContainer} />
            <AuthRoute exact path="/signup" component={SignUpFormContainer} />
            {/* <ProtectedRoute exact path="/services/new" component={ServiceFormContainer}/> */}
        </Switch>
    </div>
);
export default App;