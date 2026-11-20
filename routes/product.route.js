import express from "express";
import { createProduct } from "../services/product.service.js";
import { authenticate } from "../middlewares/auth.middleware.js";
import { logAction } from "../middlewares/log.middleware.js";

export const productRouter = express.Router();

// Cadastro de produto - operação administrativa, exige autenticação
productRouter.post(
    "/",
    authenticate,
    logAction("product.create", "products"),
    async (req, res) => {
        const product = await createProduct(req.body);

        res.locals.userId = req.user._id;
        res.locals.resourceId = product.id;

        return res.status(201).json(product);
    }
);
