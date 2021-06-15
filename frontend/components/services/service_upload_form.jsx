import React from "react";


class ServiceUploadForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {};
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
        var businfo = this.props.businessInfo
        return(
            <div className="service-form-div">
                <div className="service-form-container-div">
                    <div className="services-business-info">
                        <img src={window.images.m4}>
                        </img>
                        <div className="business-info">
                            <h3>{businfo.name}</h3>
                            <div className="licenses">
                                <h6>{businfo.address}</h6>
                                <h6>{businfo.phone}</h6>
                                <h6>{businfo.email}</h6>
                                <h6>{businfo.bar}</h6>
                                <h6>{businfo.epa}</h6>
                                <h6>{businfo.tax_number}</h6>
                            </div>
                        </div>
                    </div>
                    <form className="service-upload-form" onSubmit={this.handleSubmit}>


                    </form>
                </div>
            </div>
        )
    }
}

export default ServiceUploadForm;