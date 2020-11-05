import React from 'react';
import ClientsIndexItem from './clients_index_item';

class ClientsIndex extends React.Component {
    componentDidMount() {
        this.props.fetchClients();
    }

    render() {
        let clients = this.props.clients.reverse().map((client, i) => {
            return (
                <div className="clients-index-item-top-container" key={i}>
                    <ClientsIndexItem 
                        key={client.id}
                        client={client}
                    />
                </div>
            );
        });

        return (
            <div className="clients-index-container">
                <h1>All Clients</h1>
                <div className="clients-index-items">
                    {clients}
                </div>
            </div>
        );
    }
}

export default ClientsIndex;