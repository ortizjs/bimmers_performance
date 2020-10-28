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
                <ul className="top-nav-ul">
                    <li className="clients-li">
                        Clients
                    </li>

                    <li className="invoices-li">
                        Invoices
                    </li>

                    <li className="clients-li">
                        Vehicles
                    </li>
                </ul>
            </div>
        )
    }
}

export default TopNavBar;