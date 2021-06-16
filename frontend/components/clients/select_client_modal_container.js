import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { fetchFilteredClients } from '../../actions/client_actions';
import ClientSelectModal from './select_client_modal'

const mapStateToProps = (state, ownProps) => {
    let client_id = ownProps.match.params.client_id;
    let client_params = ownProps.match.params.client_params;
    // let filteredClients = Object.values(state.entities.filteredClients)
    let filteredClients = {}
    return ({
        filteredClients: filteredClients
        // filteredClients: ""
    });
}

const mapDispatchToProps = (dispatch) => {
    return({
        fetchFilteredClients: () => dispatch(fetchFilteredClients())
    });
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ClientSelectModal));