import merge from 'lodash';
import React from "react";
import SelectClientModalContainer from '../clients/select_client_modal_container';


class ServiceUploadForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            searchParams: ""
        };

        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        // this.updateSearch = this.updateSearch.bind(this);
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

    handleClientModal(e){
        e.preventDefault();
        const modal = document.getElementsByClassName("client-select-modal-div")[0]
        if (e.currentTarget.classList[0]
 === "client-selec-modal-button") {
            modal.style.display ="block";
        } else {
            modal.style.display ="none"
        }
    }

    // updateSearch(e) {
    //     e.preventDefault();
    //     let searchParams = {}
    //     this.setState({search: e.target.value.substr(0, 20)})
    // }


    render() {
        var businfo = this.props.businessInfo
        return(
            <div className="new-service-page-div">
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
                        <input className="date-input" type="date" placeholder="Today's date" onChange={this.handleInput("service-date")} />
                        <button className="client-selec-modal-button" onClick={this.handleClientModal}>Select Client</button>
                        <div className ="client-modal-container">
                            <SelectClientModalContainer 
                            handleClientModal={this.handleClientModal}
                            // updateSearch={this.updateSearch}
                            />
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default ServiceUploadForm;