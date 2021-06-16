export const fetchClients = () => (
    $.ajax({
        method: "GET",
        url: "api/clients"
    })
);

export const fetchClient = (id) => (
    $.ajax({
        method: "GET",
        url: `api/clients/${id}`
    })
);
export const fetchFilteredClients = (id) => (
    $.ajax({
        method: "GET",
        url: `api/clients/${id}`
    })
);

export const createClient = (client) => (
    $.ajax({
        method: "POST",
        url: "api/clients",
        data: client,
        contentType: false,
        processData: false
    })
);

export const updateClient = (client) => {
    $.ajax({
        method: "PATCH",
        url: `api/clients/${client.id}`,
        data: { client },
        contentType: false,
        processData: false
    })
};

export const deleteClient = (id) => {
    $.ajax({
        method: "DELETE",
        url: `api/clients/${id}`
    })
};