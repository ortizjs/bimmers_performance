import React from 'react';

const ClientItem = props => {
    let client = props.client
    return (
        <div className="client-item-div">
            <h5>{`${client.id}  ${client.first_name}  ${client.last_name}  ${client.cell_phone}  ${client.make}  ${client.model}  ${client.year}  ${client.last_service}`}</h5>
        </div>
    )
};

export default ClientItem;