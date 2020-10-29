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

    render() {
        return (
            <div className="top-nav-container">
                <div className="top-nav-dropdowns-container">

                    <div className="dropdown-button-container">
                        <button className="dropbutton">Clients</button>
                        <div className="dropdown-content">
                            <a href="#">Add New client</a>
                            <a href="#">Search Client</a>
                            <a href="#">All Clients</a>
                        </div>
                    </div>

                    <div className="dropdown-button-container">
                        <button className="dropbutton">Invoices</button>
                        <div className="dropdown-content">
                            <a href="#">Add New Invoice</a>
                            <a href="#">View All Invoices</a>
                            <a href="#">Paid All Invoices</a>
                        </div>
                    </div>
                    <div className="dropdown-button-container">
                        <button className="dropbutton">Vehicles</button>
                        <div className="dropdown-content">
                            <a href="#">Add New Vehicle</a>
                            <a href="#">View All Vehicles</a>
                            <a href="#">Other</a>
                        </div>
                    </div>
                    {/* <ul className="top-nav-ul">
                        <li className="clients-li">
                            <Link className="drop-down-link">
                                Clients
                            </Link>
                        </li>

                        <li className="invoices-li">
                            <Link>
                                Invoices
                            </Link>
                        </li>

                        <li className="clients-li">
                            <Link>
                                Vehicles
                            </Link>
                        </li>
                    </ul> */}
                </div>
            </div>
        )
    }
}

export default TopNavBar;