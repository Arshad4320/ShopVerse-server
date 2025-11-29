"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderController = void 0;
const order_services_1 = require("./order.services");
const createOrder = async (req, res) => {
    try {
        const userId = req.body.user;
        const payload = req.body;
        const result = await order_services_1.OrderServices.createOrder(userId, payload);
        res.json({
            success: true,
            message: "Order created successfully",
            data: result,
        });
    }
    catch (err) {
        console.log(err);
    }
};
const getOrderByUser = async (req, res) => {
    try {
        const userId = req.params.id;
        const result = await order_services_1.OrderServices.getOrderByUser(userId);
        res.json({
            success: true,
            message: "Order retrived successfully",
            data: result,
        });
    }
    catch (err) {
        console.log(err);
    }
};
const getAllOrdersFromIntoDb = async (req, res) => {
    try {
        const result = await order_services_1.OrderServices.getAllOrderFromIntoDb();
        res.json({
            success: true,
            message: "Order retrived successfully",
            data: result,
        });
    }
    catch (err) {
        console.log(err);
    }
};
const getOrderQuery = async (req, res) => {
    try {
        const result = await order_services_1.OrderServices.getOrdersQuery(req.query);
        res.json({
            success: true,
            message: "order retrived successfully",
            data: result,
        });
    }
    catch (err) {
        console.log(err);
    }
};
const updateOrder = async (req, res) => {
    try {
        const orderId = req.params.id;
        const payload = req.body;
        const result = await order_services_1.OrderServices.updateOrder(orderId, payload);
        res.json({
            success: true,
            message: "Order update successfully",
            data: result,
        });
    }
    catch (err) {
        console.log(err);
    }
};
const deleteOrder = async (req, res) => {
    try {
        const orderId = req.params.id;
        const result = await order_services_1.OrderServices.deleteOrder(orderId);
        res.json({
            success: true,
            message: "order deleted successfully",
        });
    }
    catch (err) {
        console.log(err);
    }
};
exports.OrderController = {
    getOrderQuery,
    createOrder,
    getOrderByUser,
    getAllOrdersFromIntoDb,
    updateOrder,
    deleteOrder,
};
//# sourceMappingURL=order.controller.js.map