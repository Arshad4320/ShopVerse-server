"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const user_services_1 = require("./user.services");
const createUser = async (req, res) => {
    try {
        const payload = req.body;
        const result = await user_services_1.UserServices.createUser(payload);
        res.json({
            success: true,
            message: "user created successfully",
            data: result,
        });
    }
    catch (err) {
        console.error(err);
        res.status(400).json({
            success: false,
            message: err.message || "Failed to create user",
        });
    }
};
const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        const result = await user_services_1.UserServices.loginUser(email, password);
        res.json({
            success: true,
            message: "user login successfully",
            data: result,
        });
    }
    catch (err) {
        console.log(err);
        res.json({
            success: false,
            message: err.message || "failed to login user",
        });
    }
};
const getAllUser = async (req, res) => {
    try {
        const result = await user_services_1.UserServices.getAllUser();
        res.json({
            success: true,
            message: "Users retrived successfully",
            data: result,
        });
    }
    catch (err) {
        console.log(err);
        res.json({
            success: false,
            message: err.message || "failed to get user",
        });
    }
};
const getSingleUser = async (req, res) => {
    try {
        const userId = req.params.id;
        if (!userId)
            throw new Error("user not found");
        const result = await user_services_1.UserServices.getSingleUser(userId);
        res.json({
            success: true,
            message: "User retrived successfully",
            data: result,
        });
    }
    catch (err) {
        console.log(err);
        res.json({
            success: false,
            message: err.message || "failed to get user",
        });
    }
};
const updateUser = async (req, res) => {
    try {
        const userId = req.params.id;
        if (!userId)
            throw new Error("user not found");
        const payload = req.body;
        const result = await user_services_1.UserServices.updateUser(userId, payload);
        res.json({
            success: true,
            message: "user update successfully",
            data: result,
        });
    }
    catch (err) {
        console.log(err);
        res.json({
            success: false,
            message: err.message || "failed to update user",
        });
    }
};
const deleteUser = async (req, res) => {
    try {
        const userId = req.params.id;
        if (!userId)
            throw new Error("user not found");
        const result = await user_services_1.UserServices.deleteUser(userId);
        res.json({
            success: true,
            message: "user deleted successfully",
            data: result,
        });
    }
    catch (err) {
        console.log(err);
        res.json({
            success: false,
            message: err.message || "failed to delete user",
        });
    }
};
const getMyProfile = async (req, res) => {
    const userId = req.user.id;
    const user = await user_services_1.UserServices.selfGetUser(userId);
    res.json({ success: true, data: user });
};
const updateMyProfile = async (req, res) => {
    const userId = req.user.id;
    const updated = await user_services_1.UserServices.selfUpdateUser(userId, req.body);
    res.json({ success: true, data: updated });
};
exports.UserController = {
    createUser,
    getAllUser,
    getSingleUser,
    updateUser,
    deleteUser,
    loginUser,
    getMyProfile,
    updateMyProfile,
};
//# sourceMappingURL=user.controller.js.map