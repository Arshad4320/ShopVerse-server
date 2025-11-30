"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CartController = void 0;
const cart_services_1 = require("./cart.services");
const createAddToCart = async (req, res) => {
    try {
        const payload = req.body;
        const result = await cart_services_1.CartService.createAddToCart(payload);
        res.json({
            success: true,
            message: "product cart created successfully",
            data: result,
        });
    }
    catch (err) {
        console.log(err);
    }
};
const getCartProductById = async (req, res) => {
    try {
        const userId = req.params.userId;
        const result = await cart_services_1.CartService.getCartByUser(userId);
        res.json({
            success: true,
            message: "cart data retrived successfully",
            data: result,
        });
    }
    catch (err) {
        console.log(err);
    }
};
const updateCartByProduct = async (req, res) => {
    try {
        const { productId, userId, quantity } = req.body;
        const result = await cart_services_1.CartService.updateCart(userId, productId, quantity);
        res.json({
            success: true,
            message: "cart product update successfully",
            data: result,
        });
    }
    catch (err) {
        console.log(err);
    }
};
const removeItemFromCart = async (req, res) => {
    try {
        const { userId, productId } = req.body;
        const result = await cart_services_1.CartService.removeCartItem(userId, productId);
        res.json({
            success: true,
            message: "data remove successfully",
        });
    }
    catch (err) {
        console.log(err);
    }
};
exports.CartController = {
    createAddToCart,
    getCartProductById,
    removeItemFromCart,
    updateCartByProduct,
};
//# sourceMappingURL=cart.controller.js.map