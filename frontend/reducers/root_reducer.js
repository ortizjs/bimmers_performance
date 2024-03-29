import { combineReducers } from 'redux';
import entitiesReducer from './entities_reducer';
import errorsReducer from './errors_reducer';
import sessionReducer from './session_reducer';
import contactUsReducer from './contact_reducer';
import clientsReducer from './clients_reducer';
import servicesReducer from './services_reducers';

const rootReducer = combineReducers({ 
    entities: entitiesReducer,
    session: sessionReducer,
    errors: errorsReducer,
    contactus: contactUsReducer,
    clients: clientsReducer,
    services: servicesReducer,
});

export default rootReducer;