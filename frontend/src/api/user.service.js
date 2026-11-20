import api from "./client";

export const userService = {
    update: (id, data) => api.put(`/users/${id}`, data),
    delete: (id) => api.delete(`/users/${id}`),
    listLogs: () => api.get("/logs"),
};
