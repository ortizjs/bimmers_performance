import React from 'react';

class SelectClientModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    
    render() {
        return (
            <div className="client-select-modal-div">
                <input className="client-search-bar-input"
                        type="text"
                        placeholder="Search Client"/>
                <button className="client-select-close-modal-button" onClick={this.props.handleClientModal}>Select Client</button>
            </div>
        )
    }
}


export default SelectClientModal;