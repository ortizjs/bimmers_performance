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
                    <a href="#">New Client</a>
                    <a href="#">New Invoice</a>
                    <a href="#">New Vehicle</a>
                    <a href="#">Other</a>
                </div>
            </div>
        )
    }
}

export default SideNavBar;