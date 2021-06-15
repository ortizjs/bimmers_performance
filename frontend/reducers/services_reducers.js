import merge from 'lodash/merge';
import { RECEIVE_SERVICES, RECEIVE_SERVICE, REMOVE_SERVICE} from '../actions/service_actions';

const servicesReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    let newState;
    switch(action.type) {
        case RECEIVE_SERVICES:
            return action.services;
        case RECEIVE_SERVICE:
            newState = merve({}, oldState, {[action.service.id]: action.service});
            return newState;
        case REMOVE_SERVICE:
            newState = merge({}, oldState);
            delete newState[action.id];
            return newState;
        default:
            return oldState
    }
};

export default servicesReducer;