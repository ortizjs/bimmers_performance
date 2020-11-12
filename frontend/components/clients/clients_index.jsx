import React from 'react';
import ClientsIndexTable from './clients_table';

class ClientsIndex extends React.Component {
    componentDidMount() {
        this.props.fetchClients();
    }

    render() {
        return (
            <div className="clients-index-container">
                <h1>All Clients</h1>
                <ClientsIndexTable clients={this.props.clients.reverse()} />
            </div>
        );
    }
}

export default ClientsIndex;