"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.cartRoute = void 0;
const express_1 = __importDefault(require("express"));
const cart_controller_1 = require("./cart.controller");
const router = express_1.default.Router();
router.post("/create-cart", cart_controller_1.CartController.createAddToCart);
router.get("/get-cart/:userId", cart_controller_1.CartController.getCartProductById);
router.put("/update-cart", cart_controller_1.CartController.updateCartByProduct);
router.delete("/remove-cart", cart_controller_1.CartController.removeItemFromCart);
exports.cartRoute = router;
//# sourceMappingURL=cart.route.js.map