import React from 'react';
import { Link } from 'react-router-dom';

class ClientShow extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        let client_id = this.props.match.params.clientId
        this.props.fetchClient(client_id);
    }

    render() {
        if (this.props.client === undefined) {
            return (<div></div>)
        } else {
            debugger
            // let cars = this.props.client.cars.map((car, i) => {
            //     return (
            //         <a><strong>{car}</strong></a>
            //     )
            // })
            return (
                <div className="clients-show-container">
                    <div className="client-page-separator">
                    </div>
                    <div className="client-info-container-div">
                        <div className="client-info-header">Client Information</div>
                        <table className="client-details-table" border="0" cellpadding="3" cellspacing="0" width="100%">
                            <tbody>
                                <tr>
                                    <td valign="top"><strong><nobr>Select Vehicle:</nobr></strong></td>
                                    <td bgcolor="#ffffcf">
                                        <a href="/app/action?action=Account&amp;task=SEARCH&amp;client_id=166"><nobr><b>{`${this.props.client.cars[0].make} ${this.props.client.cars[0].model} ${this.props.client.cars[0].year}`}</b></nobr></a>
                                    </td>
                                </tr>
                                <tr>
                                    <td width="44%">Licence Plate:</td><td id="whitecell"><strong>6X9351</strong></td>
                                </tr>
                                <tr>
                                    <td width="44%">VIN:</td>

                                    <td id="whitecell">
                                        <strong>
                                            <a style={{ textDecoration: "underline", color: "#0033cc", fontWeight: "bold", fontSize: "15px" }}>{this.props.client.cars[0].vin}</a>
                                        </strong>
                                    </td>

                                </tr>
                                <tr>
                                    <td>Client ID:</td><td id="whitecell"><strong>{this.props.client.id}</strong></td>
                                </tr>
                                <tr>
                                    <td>Name:</td><td id="whitecell"><strong>{`${this.props.client.first_name}   ${this.props.client.last_name}`}</strong>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Make:</td><td id="whitecell"><strong>{this.props.client.cars[0].make}</strong></td>
                                </tr>
                                <tr>
                                    <td>Model:</td><td id="whitecell"><strong>{this.props.client.cars[0].model}</strong></td>
                                </tr>
                                <tr>
                                    <td>Year:</td><td id="whitecell"><strong>{this.props.client.cars[0].year}</strong></td>
                                </tr>
                                <tr>
                                    <td>Phone:</td><td id="whitecell"><strong>{this.props.client.home_phone}</strong></td>
                                </tr>
                                <tr>
                                    <td>Mobile:</td><td id="whitecell"><strong>{this.props.client.cell_phone}</strong></td>
                                </tr>
                                <tr>
                                    <td valign="top">Address:</td><td id="whitecell"><strong>{this.props.client.address}</strong></td>
                                </tr>
                                <tr>
                                    <td>Email:</td><td id="whitecell"><strong>{this.props.client.email}</strong></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            )
        }
    }
}

export default ClientShow;