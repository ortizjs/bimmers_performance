import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

const ClientsIndexItem = (props) => {
    return (
        <tr className="clients-index-item-row">
            <Link to={`/clients/${props.client.id}`}>
                <td className="cleint-index-item-cell">{`${props.client.first_name} ${props.client.last_name}`}</td>
                <td className="cleint-index-item-cell">{props.client.email}</td>
            </Link>
        </tr>
    );
};

export default withRouter(ClientsIndexItem);