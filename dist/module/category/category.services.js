"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryServices = void 0;
const category_model_1 = require("./category.model");
const createCategory = async (payload) => {
    try {
        const result = await category_model_1.Category.create(payload);
        return result;
    }
    catch (err) {
        console.log(err);
    }
};
const getCategory = async () => {
    try {
        const result = await category_model_1.Category.find();
        return result;
    }
    catch (err) {
        console.log(err);
    }
};
const getSingleCategory = async (id) => {
    try {
        const result = await category_model_1.Category.findById(id);
        return result;
    }
    catch (err) {
        console.log(err);
    }
};
const updateCategory = async (id, payload) => {
    try {
        const result = await category_model_1.Category.findByIdAndUpdate(id, payload, { new: true });
        return result;
    }
    catch (err) {
        console.log(err);
    }
};
const deleteCategory = async (id) => {
    try {
        const result = await category_model_1.Category.findByIdAndDelete(id, { new: true });
        return result;
    }
    catch (err) {
        console.log(err);
    }
};
exports.CategoryServices = {
    createCategory,
    getCategory,
    getSingleCategory,
    updateCategory,
    deleteCategory,
};
//# sourceMappingURL=category.services.js.map