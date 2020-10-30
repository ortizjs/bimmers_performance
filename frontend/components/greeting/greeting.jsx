import React from 'react';
import { Link } from 'react-router-dom';

class Greeting extends React.Component {

    sessionLinks() {
        if (this.props.location.pathname === "/login") {
            return (
                <div className="nav-var-right">
                    <button className="nav-sign-up-button">
                        <Link to="/signup" className="nav-sign-up-link">Sign Up</Link>
                    </button>
                </div>
            )
        } else if (this.props.location.pathname === "/signup") {
            return (
                <div className="nav-var-right">
                    <button className="nav-login-button">
                        <Link to="/login" className="nav-login-link">Login</Link>
                    </button>
                </div>
            )
        } else if (this.props.location.pathname === "/" && !this.props.currentUser) {
            let none;
        } else if (this.props.location.pathname === "/" && this.props.currentUser) {
            return (
                <div className="logo-image-div">
                    <img className="image-" src={window.images.logo} alt="" />
                </div>
            );
        }
    }

    personalGreeting() {
        return (
            <div className="personal-greeting-div">
                <hgroup className="header-group">
                    <h2 className="header-name">Hello, {this.props.currentUser.first_name}!</h2>
                    <button className="header-button" onClick={this.props.logout}>Log Out</button>
                </hgroup>

            </div>
        )
    };

    logoutButton() {
        if (this.props.currentUser) {
            return (
                <button className="header-logout-button" onClick={this.props.logout}>Log Out</button>
            )
        }
    }

    

    render() {
        return (
            <div className="greeting-container">
                {/* <h1>Greeting Component!</h1> */}
                <div className="greeting-logo-container">
                    <Link to="/">
                        <img src={window.images.splash_banner_logo} alt="Logo" className="site-banner-greeting"></img>
                    </Link>
                    <div className="log-out-button-container">
                        {this.logoutButton()}
                    </div>
                </div>
            </div>
        )
    }
}
export default Greeting;