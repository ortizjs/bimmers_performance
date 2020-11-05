import React from 'react';


class ClientUploadForm extends React.Component {
    constructor(props)  {
        super(props);
        this.state = this.props.client;
        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        // let user_id = this.state.creator_id;
        // let user_id = this.props.creator_id;
    }

    handleInput(field) {
        return (e) => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        let formData = new FormData();
        formData.append("client[first_name]", this.state.first_name);
        formData.append("client[last_name]", this.state.last_name);
        formData.append("client[email]", this.state.email);
        formData.append("client[address]", this.state.address);
        formData.append("client[cell_phone]", this.state.cell_phone);
        formData.append("client[home_phone]", this.state.home_phone);
        formData.append("client[creator_id]", this.state.creator_id);
        this.props.createClient(formData).then(() => this.props.history.push("/clients"))
    }
    
    render() {
        // debugger
        return (
            <div className="client-form-div">
                <form className="client-upload-form" onSubmit={this.handleSubmit}>
                    <div className="client-upload-form-input-container">
                        <h4 className="client-form-input-label">Client First Name (Required):</h4>
                        <input className="client-upload-form-input" type="text" placeHolder="First Name" onChange={this.handleInput("first_name")}/>
                    </div>
                    <div className="client-upload-form-input-container">
                        <h4 className="client-form-input-label">Client Last Name (Required):</h4>
                        <input className="client-upload-form-input" type="text" placeHolder="Last Name" onChange={this.handleInput("last_name")}/>
                    </div>
                    <div className="client-upload-form-input-container">
                        <h4 className="client-form-input-label">Client Address:</h4>
                        <input className="client-upload-form-input" type="text" placeHolder="Address" onChange={this.handleInput("address")}/>
                    </div>
                    <div className="client-upload-form-input-container">
                        <h4 className="client-form-input-label">Client Cell Phone:</h4>
                        <input className="client-upload-form-input" type="text" placeHolder="Cell phone" onChange={this.handleInput("cell_phone")}/>
                    </div>
                    <div className="client-upload-form-input-container">
                        <h4 className="client-form-input-label">Client Home Phone:</h4>
                        <input className="client-upload-form-input" type="text" placeHolder="Home phone" onChange={this.handleInput("home_phone")}/>
                    </div>
                    <div className="client-upload-form-input-container">
                        <h4 className="client-form-input-label">Client Email:</h4>
                        <input className="client-upload-form-input" type="text" placeHolder="Email" onChange={this.handleInput("email")}/>
                    </div>
                    <div className="submit-button-container">
                        <button className="upload-client-button">ADD</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default ClientUploadForm;