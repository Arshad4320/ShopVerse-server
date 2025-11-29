"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserServices = void 0;
const user_model_1 = require("./user.model");
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const createUser = async (payload) => {
    try {
        const exist = await user_model_1.User.findOne({ email: payload.email });
        if (exist)
            throw new Error("Email already registered");
        const hashedPassword = await bcrypt_1.default.hash(payload.password, 10);
        const result = await user_model_1.User.create({
            ...payload,
            password: hashedPassword,
        });
        return result;
    }
    catch (err) {
        console.log(err);
        throw new Error(err.message || "Failed to create user");
    }
};
const loginUser = async (email, password) => {
    try {
        const user = await user_model_1.User.findOne({ email });
        if (!user)
            throw new Error("user not found please create account");
        const isCompare = await bcrypt_1.default.compare(password, user.password);
        if (!isCompare)
            throw new Error("wrong credential try again!");
        const token = jsonwebtoken_1.default.sign({
            id: user._id,
            email: user.email,
            userType: user.userType,
        }, process.env.JWT_SECRET, { expiresIn: "7d" });
        return { user, token };
    }
    catch (err) {
        console.log(err);
        throw new Error(err.message || "Failed to login user");
    }
};
const getAllUser = async () => {
    try {
        const result = await user_model_1.User.find();
        return result;
    }
    catch (err) {
        console.log(err);
        throw new Error(err.message || "Failed to get user");
    }
};
const getSingleUser = async (userId) => {
    try {
        const result = await user_model_1.User.findById(userId);
        return result;
    }
    catch (err) {
        console.log(err);
        throw new Error(err.message || "Failed to get user");
    }
};
const updateUser = async (userId, payload) => {
    try {
        if (payload.password) {
            payload.password = await bcrypt_1.default.hash(payload.password, 10);
        }
        const result = await user_model_1.User.findByIdAndUpdate(userId, payload, {
            new: true,
        });
        return result;
    }
    catch (err) {
        console.log(err);
        throw new Error(err.message || "Failed to update user");
    }
};
const deleteUser = async (userId) => {
    try {
        const result = await user_model_1.User.findByIdAndDelete(userId);
        return result;
    }
    catch (err) {
        console.log(err);
        throw new Error(err.message || "Failed to delete user");
    }
};
const selfGetUser = async (userId) => {
    try {
        return await user_model_1.User.findById(userId);
    }
    catch (err) {
        console.log(err);
    }
};
const selfUpdateUser = async (userId, payload) => {
    try {
        if (payload.password) {
            payload.password = await bcrypt_1.default.hash(payload.password, 10);
        }
        return await user_model_1.User.findByIdAndUpdate(userId, payload, {
            new: true,
        });
    }
    catch (err) {
        console.log(err);
        throw new Error(err.message || "Failed to update profile ");
    }
};
exports.UserServices = {
    createUser,
    loginUser,
    updateUser,
    getAllUser,
    getSingleUser,
    deleteUser,
    selfGetUser,
    selfUpdateUser,
};
//# sourceMappingURL=user.services.js.map