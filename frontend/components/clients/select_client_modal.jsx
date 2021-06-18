import React from 'react';
import ClientItem from './client_item';

class SelectClientModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchParams: "",
            clients: []
        };
        this.updateSearch = this.updateSearch.bind(this);
    }

    updateSearch(e) {
        e.preventDefault();
        var input = e.target.value.substr(0, 40)
        this.setState({searchParams: input}, () => {
            console.log(this.state)
            this.props.fetchFilteredClients(input)
        })
    }
    
    render() {
        let filteredClients = this.props.clients;
        return (
            <div className="client-select-modal-div">
                <div className="client-search-bar-continer">
                    <input className="client-search-bar-input"
                            type="text"
                            placeholder="Search Client"
                            onChange={this.updateSearch}/>
                    <button className="client-select-close-modal-button" onClick={this.props.handleClientModal}>Add</button>

                    <ul>
                        {filteredClients.map((client) => {
                            return (
                            <ClientItem
                            client={client}
                            />
                            )
                        })}
                    </ul>
                </div>
            </div>
        )
    }
}


export default SelectClientModal;