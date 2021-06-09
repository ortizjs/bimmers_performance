export const fetchServices = () => (
    $.ajax({
        method: "GET",
        url: "api/services"
    })
);

export const fetchService = (id) => (
    $.ajax({
        method: "GET",
        url: `api/services/${id}`
    })
);

export const createService = (service) => (
    $.ajax({
        method: "POST",
        url: "api/services",
        data: service,
        contentType: false,
        processData: false
    })
);

export const updateService = (service) => {
    $.ajax({
        method: "PATCH",
        url: `api/services/${service.id}`,
        data: { service },
        contentType: false,
        processData: false
    })
};

export const deleteService = (id) => {
    $.ajax({
        method: "DELETE",
        url: `api/services/${id}`
    })
};