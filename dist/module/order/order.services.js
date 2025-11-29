"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderServices = void 0;
const user_model_1 = require("../user/user.model");
const order_model_1 = require("./order.model");
const createOrder = async (userId, payload) => {
    try {
        const user = await user_model_1.User.findById(userId);
        if (!user)
            throw new Error("user not found");
        const useAddress = payload.address || user.address;
        const itemsWithTotal = payload.item.map((i) => ({
            ...i,
            total: i.quantity * i.price,
        }));
        const grandTotal = itemsWithTotal.reduce((sum, i) => sum + i.total, 0);
        const orderData = {
            user: userId,
            item: itemsWithTotal,
            address: useAddress,
            paymentMethod: payload.paymentMethod,
            paymentStatus: payload.paymentStatus,
            totalPrice: grandTotal,
        };
        const result = await order_model_1.Order.create(orderData);
        return result;
    }
    catch (err) {
        console.log(err);
    }
};
const getOrderByUser = async (userId) => {
    try {
        const result = await order_model_1.Order.find({ user: userId }).populate("item.product");
        return result;
    }
    catch (err) {
        console.log(err);
    }
};
const getOrdersQuery = async (query) => {
    try {
        const { limit = 9, search = "", page = 1 } = query;
        const filter = {};
        if (search) {
            filter.$or = [
                { "address.name": { $regex: search, $options: "i" } },
                { "address.phone": { $regex: search, $options: "i" } },
            ];
        }
        const skip = Number(page - 1) * Number(limit);
        const total = await order_model_1.Order.countDocuments(filter);
        const result = await order_model_1.Order.find(filter)
            .populate("item.product")
            .populate("user")
            .skip(skip)
            .limit(Number(limit))
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
const getAllOrderFromIntoDb = async () => {
    try {
        const result = await order_model_1.Order.find()
            .populate("user")
            .populate("item.product")
            .sort({ createdAt: -1 });
        return result;
    }
    catch (err) {
        console.log(err);
    }
};
const updateOrder = async (orderId, payload) => {
    try {
        const result = await order_model_1.Order.findByIdAndUpdate(orderId, payload, {
            new: true,
        });
        return result;
    }
    catch (err) {
        console.log(err);
    }
};
const deleteOrder = async (id) => {
    try {
        const result = await order_model_1.Order.findByIdAndDelete(id, { new: true });
        return result;
    }
    catch (err) {
        console.log(err);
    }
};
exports.OrderServices = {
    createOrder,
    getOrderByUser,
    getOrdersQuery,
    getAllOrderFromIntoDb,
    updateOrder,
    deleteOrder,
};
//# sourceMappingURL=order.services.js.map