import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ClientsIndex from './clients_index';
import { fetchClients } from '../../actions/client_actions';

const mapStateToProps = (state, ownProps) => {
    let clients = Object.values(state.entities.clients);
    return ({
        clients: clients
    });
}

const mapDispatchToProps = (dispatch) => {
    return({
        fetchClients: () => dispatch(fetchClients())
    });
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ClientsIndex));