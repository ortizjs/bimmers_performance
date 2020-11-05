import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

const ClientsIndexItem = (props) => {
    return (
        <div className="clients-index-item-container">
            <Link to={`/clients/${props.client.id}`}>
                {props.client.first_name}
            </Link>
            &nbsp;&nbsp;
            <Link to={`/clients/${props.client.id}`}>
                {props.client.last_name}
            </Link>
            &nbsp;&nbsp;
            <Link to={`/clients/${props.client.id}`}>
                {props.client.email}
            </Link>
        </div>
    );
};

export default withRouter(ClientsIndexItem);