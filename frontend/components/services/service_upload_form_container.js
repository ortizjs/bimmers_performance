import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createService } from '../../actions/service_actions';
import ServiceUploadForm from './service_upload_form';

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
        createService: (service) => dispatch(createService(service))
    });
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ServiceUploadForm));