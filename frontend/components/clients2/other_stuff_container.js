import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
// import otherStuff from './other_stuff';
import ClientUploadForm from '../clients/client_upload_form';

const mapStateToProps = (state, ownProps) => {
    return ({

    });
};

const mapDispatchToProps = dispatch => ({
    fetchClients: () => dispatch(fetchCleitns())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ClientUploadForm));