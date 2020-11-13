import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createClient } from '../../actions/client_actions';
import ClientUploadForm from './client_upload_form';

const mapStateToProps = (state, ownProps) => {
    let currentUserID = state.session.id;
    return({
        first_name: "",
        last_name: "",
        email: "",
        adress: "",
        home_phone: "",
        cell_phone: "",
        creator_id: currentUserID,
        make: "",
        model: "",
        year: 0,
        registration: "",
        vin: "",
        last_service: ""
    });
};

const mapDispatchToProps = dispatch => {
    return ({
        createClient: (client) => dispatch(createClient(client))
    });
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ClientUploadForm));