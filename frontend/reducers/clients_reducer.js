import merge from 'lodash/merge';
import { RECEIVE_CLIENTS, RECEIVE_CLIENT, REMOVE_CLIENT } from '../actions/client_actions';

const clientsReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    let newState;
    switch (action.type) {
        case RECEIVE_CLIENTS:
            return action.clients;
        case RECEIVE_CLIENT:
            newState = merge({}, oldState, { [action.client.id]: action.client });
            return newState
        case REMOVE_CLIENT:
            newState = merge({}, oldState);
            delete newState[action.id];
            return newState;
        default:
            return oldState;
    }
};

export default clientsReducer;