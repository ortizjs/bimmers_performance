import React from 'react';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';


class LogInForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
                username: "",
                password: ""
            };
    }

    componentDidMount() {
        this.props.clearErrors();
    }

    updateChild(field) {
        return (e) => this.setState({
            [field]: e.currentTarget.value
        });
    }

    render() {
        return (
            <div className="login-form-container">
                <form onSubmit={this.props.handleSubmit} className="login-form">
                    <div>
                        <h1 className="login-welcome">Log In to Bimmers Performance!</h1>
                        <div className="form-entries">
                            <br />
                            <label className="login-username-label"> Username:
                                    <input type="text"
                                    className="login-input"
                                    value={this.state.username}
                                    onChange={this.update('username')}
                                />
                            </label>
                            <br />
                            <label className="login-password-label">Password
                                    <input type="password"
                                    className="login-input"
                                    value={this.state.password}
                                    onChange={this.update('password')}
                                />
                            </label>
                            <br />
                            <input className="login-button" type="submit" value="Log In"
                                onClick={() => this.props.processForm(this.state).then(() => this.props.history.push("/users"))}
                            />
                            <br />
                            <br />
                            <div className="no-account-div">
                                <h5 className="no-account-msg">Don't have an account?</h5>
                                <Link to="/signup" className="no-account-signup-link">Sign Up</Link>
                            </div>
                            <div className="errors-div">
                                <br />
                                {this.props.renderErrors()}
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default LogInForm;