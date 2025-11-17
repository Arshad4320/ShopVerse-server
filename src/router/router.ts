import express from "express";
import { productRouter } from "../module/products/product.routes";
import { categoryRoute } from "../module/category/category.route";
import { cartRoute } from "../module/cart/cart.route";
import { orderRoute } from "../module/order/order.routes";
import { userRoute } from "../module/user/user.routes";

export const router = express.Router();

router.use("/", productRouter);
router.use("/", categoryRoute);
router.use("/", cartRoute);
router.use("/", orderRoute);
router.use("/", userRoute);
