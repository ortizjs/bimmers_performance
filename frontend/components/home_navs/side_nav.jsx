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
                <div className="sine-nav-inner-div">
                    <ul className="side-nav-ul">
                        <li className="client-li">
                            <Link className="drop-down-link">
                                New Client
                            </Link>
                        </li>

                        <li className="invoice-li">
                            <Link>
                                new Invoice
                            </Link>
                        </li>

                        <li className="client-li">
                            <Link>
                                New Vehicle
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default SideNavBar;