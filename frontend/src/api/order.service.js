import api from "./client";

export const orderService = {
    create: (data) => api.post("/orders", data),
    list: () => api.get("/orders"),
    getById: (id) => api.get(`/orders/${id}`),
    updateStatus: (id, status) => api.patch(`/orders/${id}/status`, { status }),
};
