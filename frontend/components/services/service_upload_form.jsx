import React from "react";


class ServiceUploadForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = this.props.service;
        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInput(field) {
        return (e) => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        let formData = new FormData()

        this.props.createService(formData).then((service) => this.props.history.push(`/services/${service.service.id}`))
    }

    render() {
        return(
            <div className ="service-form-div">
                <form className="service-upload-form" onSubmit={this.handleSubmit}>


                </form>
            </div>
        )
    }
}

export default ServiceUploadForm;