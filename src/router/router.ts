import express from "express";
import { productRouter } from "../module/products/product.routes";

export const router = express.Router();

router.use("/", productRouter);
