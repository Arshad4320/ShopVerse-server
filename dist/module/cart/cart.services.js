"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CartService = void 0;
const cart_model_1 = require("./cart.model");
const createAddToCart = async (payload) => {
    try {
        const cart = await cart_model_1.Cart.findOne({ user: payload.user });
        const item = payload.item[0];
        if (!cart) {
            const newCart = await cart_model_1.Cart.create({
                user: payload.user,
                item: [item],
            });
            return newCart;
        }
        const existingCart = cart.item.find((i) => i.product.toString() === item.product.toString());
        if (existingCart) {
            existingCart.price += item.price;
            existingCart.quantity += item.quantity;
        }
        else {
            cart.item.push(item);
        }
        await cart.save();
        return cart;
    }
    catch (err) {
        console.log(err);
    }
};
const getCartByUser = async (userId) => {
    try {
        const result = await cart_model_1.Cart.findOne({ user: userId }).populate("item.product");
        return result;
    }
    catch (err) {
        console.log(err);
    }
};
const updateCart = async (userId, productId, quantity) => {
    try {
        const cart = await cart_model_1.Cart.findOne({ user: userId });
        if (!cart)
            throw new Error("cart is not found");
        const item = cart.item.find((i) => i.product.toString() === productId);
        if (!item)
            throw new Error("product not found in cart");
        item.quantity = quantity;
        await cart.save();
        return cart;
    }
    catch (err) {
        console.log(err);
    }
};
const removeCartItem = async (userId, productId) => {
    try {
        const cart = await cart_model_1.Cart.findOne({ user: userId });
        if (!cart)
            throw new Error("Cart not found");
        cart.item = cart.item.filter((i) => i.product.toString() !== productId);
        await cart.save();
        return cart;
    }
    catch (err) {
        console.error(err);
        throw err;
    }
};
exports.CartService = {
    createAddToCart,
    getCartByUser,
    updateCart,
    removeCartItem,
};
//# sourceMappingURL=cart.services.js.map