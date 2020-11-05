import React from 'react';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';

class TopNavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
        this.hadleClick = this.handleClick.bind(this);
    }

    handleClick(arg) {
        return null;
    }

    determineTitle() {
        let location = window.location.hash.split("/")[1]
        return location[0].toUpperCase() + location.slice(1) + " Dashboard"
    }

    render() {
        return (
            <div className="top-nav-container">
                <div className="top-nav-dropdowns-container">

                    <div className="dropdown-button-container">
                        <button onClick={() => this.props.history.push("/home")} className="dropbutton">Home</button>
                    </div>
                    <div className="dropdown-button-container">
                        <button className="dropbutton">Clients</button>
                        <div className="dropdown-content">
                            <Link to="/clients/new">Add New Client</Link>
                            <Link to="/clients">View All Clients</Link>
                            <Link to="/clients">Search Clients</Link>
                        </div>
                    </div>

                    <div className="dropdown-button-container">
                        <button className="dropbutton">Invoices</button>
                        <div className="dropdown-content">
                            <Link to="/invoices/new">Add New Invoice</Link>
                            <Link to="/invoices">View All Invoices</Link>
                            <Link to="/invoices">Paid All Invoices</Link>
                        </div>
                    </div>
                    <div className="dropdown-button-container">
                        <button className="dropbutton">Vehicles</button>
                        <div className="dropdown-content">
                            <Link to="/cars/new">Add New Vehicle</Link>
                            <Link to="/cars">View All Vehicles</Link>
                            <Link to="/cars">Other</Link>
                        </div>
                    </div>
                </div>
                <div className="top-nav-divider">
                    <h1>
                        {this.determineTitle()}
                    </h1>
                </div>
            </div>
        )
    }
}

export default TopNavBar;