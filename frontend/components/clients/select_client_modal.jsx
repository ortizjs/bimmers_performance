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
            </div>
        )
    }
}


export default SelectClientModal;