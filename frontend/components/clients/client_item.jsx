import React from 'react';

const ClientItem = props => {
    return (
        <div className="client-item-div">
            <h5>{props.clientFirstName}</h5>
            <h5>{props.clientLastName}</h5>
            <h5>{props.clientVehicle}</h5>
        </div>
    )
};

export default ClientItem;