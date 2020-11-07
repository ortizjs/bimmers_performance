import React from 'react';
import ClientsIndexItem from './clients_index_item';

class ClientsIndex extends React.Component {
    componentDidMount() {
        this.props.fetchClients();
    }

    render() {
        let clients = this.props.clients.reverse().map((client, i) => {
            return (
                // <div className="clients-index-item-top-container" key={i}>
                    <ClientsIndexItem 
                        key={client.id}
                        client={client}
                        index={i}
                    />
                // </div>
            );
        });

        return (
            <div className="clients-index-container">
                <h1>All Clients</h1>
                <table className="clients-index-table">
                    <tbody id="clients-index-content">
                        <tr>
                            <th>Client Name</th>
                            <th>Email</th>
                            <th>Other</th>
                        </tr>
                        {clients}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default ClientsIndex;