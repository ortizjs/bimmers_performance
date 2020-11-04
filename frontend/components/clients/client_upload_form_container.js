import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ClientUploadForm from './client_upload_form';
import { createClient } from '../../actions/client_actions';

const mapStateToProps = (state, ownProps) => {
    let currentUserID = state.session.id;
    return({
        first_name: "",
        last_name: "",
        email: "",
        adress: "",
        home_phone: "",
        cell_phone: "",
        creator_id: currentUserID
    });
}

const mapDispatchToProps = dispatch => {
    return ({
        createClient: (client) => dispatch(createClient(client))
    });
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ClientUploadForm));