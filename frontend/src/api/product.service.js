import api from "./client";

export const productService = {
    create: (data) => api.post("/products", data),
};
