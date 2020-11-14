import React from 'react';
import { Link } from 'react-router-dom';

class ClientShow extends React.Component {
    constructor(props){
        super(props);
    }

    componentDidMount() {
        let client_id = this.props.match.params.clientId
        this.props.fetchClient(client_id);
    }

    render(){

        return(
            <div className="clients-show-container">
                <div>Hello</div>
            </div>
        )
    }
}

export default ClientShow;