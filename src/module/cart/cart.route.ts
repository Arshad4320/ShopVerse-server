import express from "express";
import { CartController } from "./cart.controller";

const router = express.Router();

router.post("/create-cart", CartController.createAddToCart);
router.get("/get-cart/:userId", CartController.getCartProductById);
router.put("/update-cart", CartController.updateCartByProduct);
router.delete("/remove-cart", CartController.removeItemFromCart);

export const cartRoute = router;
