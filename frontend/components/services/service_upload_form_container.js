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
        last_service: "",
        businessInfo: {
            name: "BIMMERS PERFORMANCE AUTO SERVICE",
            address: "1090 DETROIT AVE SUIT D CONCORD CA 94518",
            phone: "(925) 682-3232",
            email: "ifixbmwnow@gmail.com",
            tax_number: "1",
            bar: "#ARD00274146",
            epa: "CAL 000270039"
        }
    });
};

const mapDispatchToProps = dispatch => {
    return ({
        createService: (service) => dispatch(createService(service))
    });
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ServiceUploadForm));