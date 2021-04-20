import React from 'react';


class ClientUploadForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.clientCar;
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
        formData.append("client[make]", this.state.make)
        formData.append("client[model]", this.state.model)
        formData.append("client[year]", this.state.year)
        formData.append("client[registration]", this.state.registration)
        formData.append("client[vin]", this.state.vin)
        formData.append("client[last_service]", this.state.last_service)
        this.props.createClient(formData).then((client) => this.props.history.push(`/clients/${client.client.id}`))
    }

    render() {
        return (
            <div className="client-form-div">
                <form className="client-upload-form" onSubmit={this.handleSubmit}>
                    <div className="client-upload-form-input-container">
                        <h4 className="client-form-input-label">Client First Name (Required): </h4>
                        <input className="client-upload-form-input" type="text" placeHolder="First Name" onChange={this.handleInput("first_name")} />
                    </div>
                    <div className="client-upload-form-input-container">
                        <h4 className="client-form-input-label">Client Last Name (Required): </h4>
                        <input className="client-upload-form-input" type="text" placeHolder="Last Name" onChange={this.handleInput("last_name")} />
                    </div>
                    <div className="client-upload-form-input-container">
                        <h4 className="client-form-input-label">Client Address:</h4>
                        <input className="client-upload-form-input" type="text" placeholder="Address" onChange={this.handleInput("address")} />
                    </div>
                    <div className="client-upload-form-input-container">
                        <h4 className="client-form-input-label">Client Cell Phone:</h4>
                        <input className="client-upload-form-input" type="text" placeholder="Cell phone" onChange={this.handleInput("cell_phone")} />
                    </div>
                    <div className="client-upload-form-input-container">
                        <h4 className="client-form-input-label">Client Home Phone:</h4>
                        <input className="client-upload-form-input" type="text" placeholder="Home phone" onChange={this.handleInput("home_phone")} />
                    </div>
                    <div className="client-upload-form-input-container">
                        <h4 className="client-form-input-label">Client Email:</h4>
                        <input className="client-upload-form-input" type="text" placeholder="Email" onChange={this.handleInput("email")} />
                    </div>

                    <div className="client-car-upload-form-container">
                        <div className="client-car-upload-form-input-container">
                            <h4 className="client-form-input-label">Make:</h4>
                            <input className="client-upload-form-input" type="text" placeholder="Make" onChange={this.handleInput("make")} />
                        </div>
                        <div className="client-car-upload-form-input-container">
                            <h4 className="client-form-input-label">Model:</h4>
                            <input className="client-upload-form-input" type="text" placeholder="Model" onChange={this.handleInput("model")} />
                        </div>
                        <div className="client-car-upload-form-input-container">
                            <h4 className="client-form-input-label">Year:</h4>
                            <input className="client-upload-form-input" type="text" placeholder="Year" onChange={this.handleInput("year")} />
                        </div>
                        <div className="client-car-upload-form-input-container">
                            <h4 className="client-form-input-label">Registration:</h4>
                            <input className="client-upload-form-input" type="text" placeholder="Registration" onChange={this.handleInput("registration")} />
                        </div>
                        <div className="client-car-upload-form-input-container">
                            <h4 className="client-form-input-label">VIN:</h4>
                            <input className="client-upload-form-input" type="text" placeholder="VIN" onChange={this.handleInput("vin")} />
                        </div>
                        <div className="client-car-upload-form-input-container">
                            <h4 className="client-form-input-label">Last Service:</h4>
                            <input className="client-upload-form-input" type="date" placeholder="Last Service" onChange={this.handleInput("last_service")} />
                        </div>
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