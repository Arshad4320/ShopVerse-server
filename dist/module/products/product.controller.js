"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductController = void 0;
const product_service_1 = require("./product.service");
const cloudinary_1 = require("../../utilits/cloudinary");
const createProduct = async (req, res) => {
    try {
        const payload = req.body;
        const file = req.file;
        let imageUrl = "";
        // Upload Image
        if (file) {
            imageUrl = (await (0, cloudinary_1.uploadToCloudinary)(file.buffer, file.originalname));
        }
        const price = Number(payload.price);
        const discount = Number(payload.discount);
        const quantity = Number(payload.quantity);
        payload.discountPrice =
            discount > 0 ? price - (price * discount) / 100 : price;
        const updatedPayload = {
            ...payload,
            price,
            quantity,
            discount,
            image: imageUrl,
        };
        const result = await product_service_1.ProductServices.createProduct(updatedPayload);
        res.status(200).json({
            success: true,
            message: "product created successfully",
            data: result,
        });
    }
    catch (err) {
        console.log(err);
    }
};
const getProducts = async (req, res) => {
    try {
        const result = await product_service_1.ProductServices.getProducts();
        res.status(200).json({
            success: true,
            message: "data is retrived successfully",
            data: result,
        });
    }
    catch (err) {
        console.log(err);
    }
};
const getProductsQuery = async (req, res) => {
    try {
        const result = await product_service_1.ProductServices.getProductsQuery(req.query);
        res.status(200).json({
            success: true,
            message: "data is retrived successfully",
            data: result,
        });
    }
    catch (err) {
        console.log(err);
    }
};
const getSingleProduct = async (req, res) => {
    try {
        const productId = req.params.id;
        if (!productId) {
            return res.status(404).json({
                success: false,
                message: "product id is not found",
            });
        }
        const result = await product_service_1.ProductServices.getSingleProduct(productId);
        res.status(200).json({
            success: true,
            message: "product is retrived successfully",
            data: result,
        });
    }
    catch (err) {
        console.log(err);
    }
};
const updateProduct = async (req, res) => {
    try {
        const productId = req.params.id;
        const payload = req.body;
        const file = req.file;
        let imageUrl = "";
        if (file) {
            imageUrl = (await (0, cloudinary_1.uploadToCloudinary)(file.buffer, file.originalname));
        }
        const updatedPayload = {
            ...payload,
            price: Number(payload.price),
            quantity: Number(payload.quantity),
            image: imageUrl,
        };
        if (!productId) {
            return res.status(404).json({
                success: false,
                message: "product id is not found",
            });
        }
        const result = await product_service_1.ProductServices.updateProduct(productId, updatedPayload);
        res.status(200).json({
            success: true,
            message: "product update successfully",
            data: result,
        });
    }
    catch (err) {
        console.log(err);
    }
};
const deleteProduct = async (req, res) => {
    try {
        const productId = req.params.id;
        if (!productId) {
            return res.status(404).json({
                success: false,
                message: "product id is not found",
            });
        }
        const result = await product_service_1.ProductServices.deleteProduct(productId);
        res.status(200).json({
            success: true,
            message: "product deleted successfully",
        });
    }
    catch (err) {
        console.log(err);
    }
};
exports.ProductController = {
    createProduct,
    getProductsQuery,
    getProducts,
    getSingleProduct,
    updateProduct,
    deleteProduct,
};
//# sourceMappingURL=product.controller.js.map