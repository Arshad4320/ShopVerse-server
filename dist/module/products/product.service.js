"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductServices = void 0;
const product_model_1 = require("./product.model");
const createProduct = async (payload) => {
    try {
        const result = await product_model_1.ProductSchema.create(payload);
        return result;
    }
    catch (err) {
        console.log(err);
    }
};
const getProducts = async () => {
    try {
        const result = await product_model_1.ProductSchema.find().populate("categoryId");
        return result;
    }
    catch (err) {
        console.log(err);
    }
};
const getProductsQuery = async (query) => {
    try {
        const filters = {};
        const { page = 1, limit = 8, search, category } = query;
        if (search) {
            filters.$or = [
                { name: { $regex: search, $options: "i" } },
                { category: { $regex: search, $options: "i" } },
            ];
        }
        if (category) {
            filters.categoryId = category;
        }
        const skip = (Number(page) - 1) * Number(limit);
        const total = await product_model_1.ProductSchema.countDocuments(filters);
        const result = await product_model_1.ProductSchema.find(filters)
            .skip(skip)
            .limit(Number(limit))
            .populate("categoryId")
            .sort({ createdAt: -1 });
        return {
            result,
            meta: {
                total,
                page: Number(page),
                limit: Number(limit),
                totalPage: Math.ceil(total / Number(limit)),
            },
        };
    }
    catch (err) {
        console.log(err);
    }
};
const getSingleProduct = async (id) => {
    try {
        const result = await product_model_1.ProductSchema.findById(id).populate("categoryId");
        return result;
    }
    catch (err) {
        console.log(err);
    }
};
const updateProduct = async (id, payload) => {
    try {
        const result = await product_model_1.ProductSchema.findByIdAndUpdate(id, payload, {
            new: true,
        });
        return result;
    }
    catch (err) {
        console.log(err);
    }
};
const deleteProduct = async (id) => {
    try {
        const result = await product_model_1.ProductSchema.findByIdAndDelete(id);
        return result;
    }
    catch (err) {
        console.log(err);
    }
};
exports.ProductServices = {
    createProduct,
    getProducts,
    getProductsQuery,
    getSingleProduct,
    updateProduct,
    deleteProduct,
};
//# sourceMappingURL=product.service.js.map