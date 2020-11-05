import React from 'react';
import { Route, Redirect, Switch, Link, HashRouter } from "react-router-dom";

class SideNavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(arg) {
        return null;
    }

    render() {
        return (
            <div className="side-nav-container">
                <div className="side-nav-inner-div">
                    <Link to="/clients/new">New Client</Link>
                    <Link to="/invoices/new">New Invoice</Link>
                    <Link to="/cars/new">New Vehicle</Link>
                    <Link to="/other">Other</Link>
                </div>
            </div>
        )
    }
}

export default SideNavBar;