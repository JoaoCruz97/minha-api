import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "O nome do produto é obrigatório"],
            trim: true,
            maxlength: [150, "O nome deve ter no máximo 150 caracteres"],
        },
        description: {
            type: String,
            trim: true,
            maxlength: [1000, "A descrição deve ter no máximo 1000 caracteres"],
        },
        sku: {
            type: String,
            required: [true, "O SKU é obrigatório"],
            unique: true,
            trim: true,
            uppercase: true,
            maxlength: [50, "O SKU deve ter no máximo 50 caracteres"],
        },
        category: {
            type: String,
            required: [true, "A categoria é obrigatória"],
            trim: true,
            enum: {
                values: [
                    "aneis",
                    "colares",
                    "correntes",
                    "pulseiras",
                    "brincos",
                    "pingentes",
                    "tornozeleiras",
                    "outros-acessorios",
                ],
                message: "Categoria inválida",
            },
        },
        productType: {
            type: String,
            required: [true, "O tipo do produto é obrigatório"],
            trim: true,
            maxlength: [100, "O tipo deve ter no máximo 100 caracteres"],
        },
        material: {
            type: String,
            required: [true, "O material é obrigatório"],
            trim: true,
            enum: {
                values: ["prata-925", "prata-950", "aco-inoxidavel", "semijoia"],
                message: "Material inválido",
            },
        },
        finish: {
            type: String,
            trim: true,
            maxlength: [50, "O acabamento deve ter no máximo 50 caracteres"],
        },
        color: {
            type: String,
            trim: true,
            maxlength: [50, "A cor deve ter no máximo 50 caracteres"],
        },
        size: {
            type: String,
            trim: true,
            maxlength: [50, "O tamanho deve ter no máximo 50 caracteres"],
        },
        weight: {
            type: Number,
            min: [0, "O peso não pode ser negativo"],
        },
        gender: {
            type: String,
            trim: true,
            enum: {
                values: ["masculino", "feminino", "unissex"],
                message: "Gênero inválido",
            },
        },
        price: {
            type: Number,
            required: [true, "O preço de venda é obrigatório"],
            min: [0, "O preço não pode ser negativo"],
        },
        costPrice: {
            type: Number,
            min: [0, "O preço de custo não pode ser negativo"],
        },
        stockQuantity: {
            type: Number,
            required: [true, "A quantidade em estoque é obrigatória"],
            min: [0, "A quantidade em estoque não pode ser negativa"],
            default: 0,
        },
        isAvailable: {
            type: Boolean,
            default: true,
        },
        images: {
            type: [String],
            default: [],
        },
        isActive: {
            type: Boolean,
            default: true,
        },
    },
    {
        timestamps: true,
        toJSON: {
            transform: (doc, ret) => {
                delete ret.__v;
                return ret;
            },
        },
    }
);

export const ProductModel = mongoose.model("Products", productSchema);
