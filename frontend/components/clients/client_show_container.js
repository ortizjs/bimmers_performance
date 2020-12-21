import { connect } from 'react-redux';
import { fetchClient } from '../../actions/client_actions';
import ClientShow from './client_show';

const mapStateToProps = (state, ownProps) => {
    // let client = state.entities.clients[client_id] || {};
    // debugger
    let client_id = ownProps.match.params.clientId
    let client = state.entities.clients[client_id];
    return ({
        client: client,
    });
};

const mapDispatchToProps = dispatch => {
    return ({
        fetchClient: id => dispatch(fetchClient(id))
    });
};

export default connect(mapStateToProps, mapDispatchToProps)(ClientShow);