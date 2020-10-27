import React from 'react';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';
import GreetingContainer from '../greeting/greeting_container';


class HomePageMasterContainer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            
        }
    }

    render() {
        return (
            <div className="home-master-container-div">
                <div className="home_page_inner_div">
                    <div className="greeting-container-div">
                        <GreetingContainer/>
                    </div>
                </div>
            </div>
        )
    }
}

export default HomePageMasterContainer;