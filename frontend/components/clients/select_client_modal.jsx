import React from 'react';
import ClientItem from './client_item';

class SelectClientModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchParams: "",
            clients: [],
        };
        this.updateSearch = this.updateSearch.bind(this);
    }

    updateSearch(e) {
        e.preventDefault();
        var input = e.target.value.substr(0, 40)
        this.setState({searchParams: input}, () => {
            this.props.fetchFilteredClients(input)
        })
    }

    renderResuls(clients) {        
        if (clients.length > 0 && clients[0] !== "No records found!") {
            return (
            <div className="filtered-clients-result-div">
                <ul>
                    {clients.map((client, idx) => {
                        return (
                        <ClientItem
                        client={client}
                        key={idx}
                        />
                        )
                    })}
                </ul>
            </div>
            )
        } else {
            return <div></div>
        }
    }
    
    render() {
        return (
            <div className="client-select-modal-div">
                <div className="client-search-bar-continer">
                    <input className="client-search-bar-input"
                            type="text"
                            placeholder="Search Client"
                            onChange={this.updateSearch}/>
                    <button className="client-select-close-modal-button" onClick={this.props.handleClientModal}>Add</button>
                    {this.renderResuls(this.props.clients)}
                </div>
            </div>
        )
    }
}


export default SelectClientModal;