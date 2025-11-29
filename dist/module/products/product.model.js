"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductSchema = void 0;
const mongoose_1 = require("mongoose");
const ProductModel = new mongoose_1.Schema({
    categoryId: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "Category",
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    quantity: {
        type: Number,
        required: true,
    },
    brand: {
        type: String,
        required: true,
    },
    tags: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    discount: {
        type: Number,
    },
    discountPrice: {
        type: Number,
    },
    image: {
        type: String,
        required: true,
    },
}, {
    timestamps: true,
});
exports.ProductSchema = (0, mongoose_1.model)("Product", ProductModel);
//# sourceMappingURL=product.model.js.map