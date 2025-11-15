import express from "express";
import { productRouter } from "../module/products/product.routes";
import { categoryRoute } from "../module/category/category.route";

export const router = express.Router();

router.use("/", productRouter);
router.use("/", categoryRoute);
