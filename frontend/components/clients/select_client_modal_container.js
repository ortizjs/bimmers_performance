import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { fetchFilteredClients } from '../../actions/client_actions';
import ClientSelectModal from './select_client_modal'

const mapStateToProps = (state, ownProps) => {
    let clients = Object.values(state.entities.clients)
    return ({
        searchParams: "",
        clients: clients
    });
}

const mapDispatchToProps = (dispatch) => {
    return({
        fetchFilteredClients: (clients) => dispatch(fetchFilteredClients(clients))
    });
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ClientSelectModal));