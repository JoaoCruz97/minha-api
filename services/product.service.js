import { ProductModel } from "../model/product.model.js";
import { AppError } from "../utils/app-error.js";

export const createProduct = async (payload) => {
    const existing = await ProductModel.findOne({ sku: payload.sku });

    if (existing) {
        throw new AppError("SKU já cadastrado", 409);
    }

    const product = await ProductModel.create(payload);

    return product;
};
