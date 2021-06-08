import React from 'react';
import {Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';

class SplashNav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {active: "home"};
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(menuItem) {
        // debugger
        this.setState({active: menuItem});
    }

    render() {
        // debugger
        return (
            <div className="splash-nav-main-div">
                <ul className="splash-nav-ul">
                    <li id="home" className={window.location.href.split("/")[4] === "" ? "active" : "inactive"}>
                        <Link to="/" onClick={() => this.handleClick("home")}>
                            Home
                        </Link>
                    </li>
                    
                    <li id="services" className={window.location.href.split("/")[4] === "services_offered" ? "active" : "inactive"}>
                        <Link to="/services_offered" onClick={() => this.handleClick("services_offered")} >
                            Services
                        </Link>
                    </li>

                    <li id="contactus" className={window.location.href.split("/")[4] === "contactus" ? "active" : "inactive"}>
                        <Link to="/contactus" onClick={() => this.handleClick("contactus")} >
                            Contact Us
                        </Link>
                    </li>

                    <li id="" className={window.location.href.split("/")[4] === "admin" ? "active" : "inactive"}>
                        <Link to="/home" onClick={() => this.handleClick("admin")} >
                            Admin
                        </Link>
                    </li>
                </ul>
            </div>
        )
    }
}

export default SplashNav;