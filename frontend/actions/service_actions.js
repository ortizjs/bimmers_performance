import * as ServiceAPIUtil from '../utils/service_api_util';

export const RECEIVE_SERVICES = "RECEIVE_SERVICES";
export const RECEIVE_SERVICE = "RECEIVE_SERVICE";
export const REMOVE_SERVICE = "REMOVE_SERVICE";

export const receiveServices = (services) => ({
    type: RECEIVE_SERVICES,
    services: services
});
export const receiveService = (service) => ({
    type: RECEIVE_SERVICE,
    services: service
});

export const receiveUser = (user) => ({
    type: RECEIVE_USER,
    user: user
});

export const removeService = (serviceId) => ({
    type: REMOVE_SERVICE,
    id: serviceId
});

export const fetchServices = () => dispatch => (
    ServiceAPIUtil.fetchServices().then(services => dispatch(receiveServices(services)))
);

export const fetchService = () => dispatch => (
    ServiceAPIUtil.fetchService().then(service => dispatch(receiveService(service)))
);

export const createService = (service) => dispatch => (
    ServiceAPIUtil.createService(service).then(service => dispatch(receiveService(service)))
);

export const updateService = (service) => dispatch => (
    ServiceAPIUtil.updateService(service).then(service => dispatch(receiveService(service)))
);

export const deleteService = (id) => dispatch => (
    ServiceAPIUtil.deleteService(id).then(id => dispatch(removeService(id)))
);





