import React from 'react';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';
import GreetingContainer from '../greeting/greeting_container';
import LogInForm from './log_in_form';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        this.props.clearErrors();
    }
    

    update(field) {
        return (e) => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user);
    }
 
    renderErrors() {
        return (
            <ul>
                {this.props.errors.map((error, i) => (
                    <li key={`error-${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        );
    }

    render () {
        if (this.props.formType === "login") {
            return (
                <div className="login-form-container">
                    < div className="login-form-inner-div">
                        <Link to="/">
                            <img src={window.images.m_logo} alt="Logo" className="site-banner-login"></img>
                        </Link>
                        <form onSubmit={this.handleSubmit} className="login-form">
                            <div className="inner-login-form">
                                <h1 className="login-welcome">Log In to Bimmers Performance!</h1>
                                <div className="form-entries"> 
                                    <br/>
                                    <label className="login-username-label"> Username: &nbsp;
                                    
                                        <input type="text"
                                            className="login-input"
                                            value={this.state.username}
                                            onChange={this.update('username')}
                                        />
                                    </label>
                                    <br/>
                                    <br/>
                                    <label className="login-password-label">Password: &nbsp;
                                        <input type="password"
                                            className="login-input"
                                            value={this.state.password}
                                            onChange={this.update('password')}
                                        />
                                    </label>
                                    <br/>
                                    <br/>
                                    <button className="large-log-inbutton" type="submit" value="Log In"
                                        onClick={() => this.props.processForm(this.state).then(() => this.props.history.push("/users"))}> Log In </button>
                        
                                    {/* <input className="login-button" type="submit" value="Log In"
                                         onClick={() => this.props.processForm(this.state).then(() => this.props.history.push("/users"))}
                                    /> */}
                                    <br/>
                                    <br/>
                                    {/* <div className="no-account-div">
                                        <h5 className="no-account-msg">Don't have an account?</h5>
                                        <Link to="/signup" className="no-account-signup-link">Sign Up</Link>
                                    </div> */}
                                    <div className="errors-div">
                                        <br/>
                                        {this.renderErrors()}
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            )
        } else {
            return (
                <div className="signup-form-container"> 
                    <form onSubmit={this.handleSubmit} className="signup-form">
                        <div>
                            <h1 className="signup-banner">Join Bimmers Performance!</h1>
                            <div className="form-entries">
                                <br/>
                                <label className="ignup-username-label"> Username:
                                    <input 
                                        type={"text"} value={this.state.username}
                                        onChange={this.update('username')}
                                        className="signup-input"
                                    />
                                </label>
                                <br/>
                                <label className="signup-password-label"> Password:
                                    <input 
                                        type="text"
                                        value={this.state.password}
                                        onChange={this.update('password')}
                                        className="signup-input"
                                    />
                                </label>
                                <br/>
                                <label className="signup-labels"> Email:
                                    <input 
                                        type="text"
                                        value={this.state.email}
                                        onChange={this.update('email')}
                                        className="signup-input"
                                        />
                                </label>
                                <br/>
                                <label className="signup-labels"> First Name:
                                    <input
                                        type="text"
                                        value={this.props.firs_name}
                                        onChange={this.update('first_name')}
                                        className="signup-input"
                                    />
                                </label>
                                <br/>
                                <label className="signup-labels"> Last Name:
                                    <input
                                        type="text"
                                        value={this.props.last_name}
                                        onChange={this.update('last_name')}
                                        className="signup-input"
                                    />
                                </label>
                                <br/>
                                <input className="session-submit-button" type="submit" value="Sing Up" 
                                       onClick={() => this.props.processForm(this.state).then(() => this.props.history.push("/users"))}
                                />
                                <br/>
                                <br/>
                                <div className="errors-div">
                                    <br />
                                    {this.renderErrors()}
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            )
        }
    }
}
export default SessionForm;