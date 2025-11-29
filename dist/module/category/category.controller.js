"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryController = void 0;
const category_services_1 = require("./category.services");
const cloudinary_1 = require("../../utilits/cloudinary");
const createCategory = async (req, res) => {
    try {
        const payload = req.body;
        const file = req.file;
        let imageUrl = "";
        if (file) {
            imageUrl = (await (0, cloudinary_1.uploadToCloudinary)(file.buffer, file.originalname));
        }
        const updatedPayload = {
            ...payload,
            image: imageUrl,
        };
        const result = await category_services_1.CategoryServices.createCategory(updatedPayload);
        res.json({
            success: true,
            message: "Category created successfully",
            data: result,
        });
    }
    catch (err) {
        console.log(err);
    }
};
const getCategory = async (req, res) => {
    try {
        const result = await category_services_1.CategoryServices.getCategory();
        res.status(200).json({
            success: true,
            message: "category retrived successfully",
            data: result,
        });
    }
    catch (err) {
        console.log(err);
    }
};
const getSingleCategory = async (req, res) => {
    try {
        const categoryId = req.params.id;
        if (!categoryId) {
            return res.status(404).json({
                success: false,
                message: "category is not found",
            });
        }
        const result = await category_services_1.CategoryServices.getSingleCategory(categoryId);
        res.status(200).json({
            success: true,
            message: "category is retrived successfully",
            data: result,
        });
    }
    catch (err) {
        console.log(err);
    }
};
const updateCategory = async (req, res) => {
    try {
        const categoryId = req.params.id;
        const payload = req.body;
        const file = req.file;
        let imageUrl = payload.image;
        if (file) {
            imageUrl = (await (0, cloudinary_1.uploadToCloudinary)(file.buffer, file.originalname));
        }
        const updatedPayload = {
            ...payload,
            image: imageUrl,
        };
        const result = await category_services_1.CategoryServices.updateCategory(categoryId, updatedPayload);
        res.status(200).json({
            success: true,
            message: "category update successfully",
            data: result,
        });
    }
    catch (err) {
        console.log(err);
    }
};
const deleteCategory = async (req, res) => {
    try {
        const categoryId = req.params.id;
        if (!categoryId) {
            return res.status(404).json({
                success: false,
                message: "category id is not found",
            });
        }
        const result = await category_services_1.CategoryServices.deleteCategory(categoryId);
        res.status(200).json({
            success: true,
            message: "category deleted successfully",
        });
    }
    catch (err) {
        console.log(err);
    }
};
exports.CategoryController = {
    createCategory,
    getCategory,
    getSingleCategory,
    updateCategory,
    deleteCategory,
};
//# sourceMappingURL=category.controller.js.map