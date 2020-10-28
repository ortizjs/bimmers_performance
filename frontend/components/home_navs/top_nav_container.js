import { connect } from 'react-redux';
import { withRouter }  from 'react-router-dom';
import TopNavBar from './top_nav';

const mapStateToProps = (state, ownProps) => {
    return ({

    });
};

const mapDispatchToProps = dispatch => ({
    fetchClients: () => dispatch(fetchCleitns())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TopNavBar));