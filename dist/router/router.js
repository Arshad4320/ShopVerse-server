"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = __importDefault(require("express"));
const product_routes_1 = require("../module/products/product.routes");
const category_route_1 = require("../module/category/category.route");
const cart_route_1 = require("../module/cart/cart.route");
const order_routes_1 = require("../module/order/order.routes");
const user_routes_1 = require("../module/user/user.routes");
exports.router = express_1.default.Router();
exports.router.use("/", product_routes_1.productRouter);
exports.router.use("/", category_route_1.categoryRoute);
exports.router.use("/", cart_route_1.cartRoute);
exports.router.use("/", order_routes_1.orderRoute);
exports.router.use("/", user_routes_1.userRoute);
//# sourceMappingURL=router.js.map