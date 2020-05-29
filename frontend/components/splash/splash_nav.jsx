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
                    <li className={this.state.active === "home" ? "active" : ""}>
                        <Link to="/" onClick={() => this.handleClick("home")} >
                            {/* <a> Home </a> */}
                            Home
                        </Link>
                    </li>
                    
                    <li className={this.state.active === "services" ? "active" : ""}>
                        <Link to="/services" onClick={() => this.handleClick("services")} >
                            {/* <a> Services </a> */}
                            Services
                        </Link>
                    </li>

                    <li className={this.state.active === "specials" ? "active" : ""}>
                        <Link to="/specials" onClick={() => this.handleClick("specials")} >
                            {/* <a> Specials </a> */}
                            Specials
                        </Link>
                    </li>

                    <li className={this.state.active === "contactus" ? "active" : ""}>
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