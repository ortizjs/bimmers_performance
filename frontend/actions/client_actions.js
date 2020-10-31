import * as ClientAPIUtil from '../utils/client_api_util';

export const RECEIVE_CLIENTS = "RECEIVE_CLIENTS";
export const RECEIVE_CLIENT = "RECEIVE_CLIENT";
export const REMOVE_CLIENT = "REMOVE_CLIENT";

export const receiveClients = (clients) => ({
    type: RECEIVE_CLIENTS,
    clients: clients
});

export const receiveClient = (client) => ({
    type: RECEIVE_CLIENT,
    client: client
});

export const receiveUser = (user) => ({
    type: RECEIVE_USER,
    user: user
});

export const removeClient = (clientId) => ({
    type: REMOVE_CLIENT,
    id: clientId
});

export const fetchClients = () => dispatch => (
    ClientAPIUtil.fetchClients().then(clients => dispatch(receiveClients(clients)))
);

export const fetchClient = (id) => dispatch => (
    ClientAPIUtil.fetchClient(id).then(client => dispatch(receiveClient(client)))
);

export const createClient = (client) => dispatch => (
    ClientAPIUtil.createClient(client).then(client => dispatch(receiveClient(client)))
);

export const updateClient = (client) => dispatch => (
    ClientAPIUtil.updateClient(client).then(client => dispatch(receiveClient(client)))
);

export const deleteClient = (id) => dispatch => (
    ClientAPIUtil.deleteClient(id).then(id => dispatch(removeClient(id)))
);