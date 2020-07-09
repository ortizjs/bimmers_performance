import React from 'react';
import {Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';

class SplashNav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {active: "home"};
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(menuItem) {
        this.setState({active: menuItem});
    }

    render() {
        return (
            <div className="splash-nav-main-div">
                <ul className="splash-nav-ul">
                    <li id="home" className={this.state.active === "home" ? "active" : "inactive"}>
                        <Link to="/" onClick={() => this.handleClick("home")}>Home</Link>
                    </li>
                    
                    <li id="services" className={this.state.active === "services" ? "active" : "inactive"}>
                        <Link to="/services" onClick={() => this.handleClick("services")} >
                            {/* <a> Services </a> */}
                            Services
                        </Link>
                    </li>

                    <li id="specials" className={this.state.active === "specials" ? "active" : "inactive"}>
                        <Link to="/specials" onClick={() => this.handleClick("specials")} >
                            {/* <a> Specials </a> */}
                            Specials
                        </Link>
                    </li>

                    <li id="contactus" className={this.state.active === "contactus" ? "active" : "inactive"}>
                        <Link to="/contactus" onClick={() => this.handleClick("contactus")} >
                            {/* <a> Contact Us </a> */}
                            Contact Us
                        </Link>
                    </li>
                </ul>
            </div>
        )
    }
}

export default SplashNav;