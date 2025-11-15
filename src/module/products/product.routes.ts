import express from "express";
import { ProductController } from "./product.controller";

const router = express.Router();

router.post("/product-create", ProductController.createProduct);
router.get("/products", ProductController.getProducts);
router.get("/product/:id", ProductController.getSingleProduct);
router.patch("/product-update/:id", ProductController.updateProduct);
router.delete("/product-delete/:id", ProductController.deleteProduct);

export const productRouter = router;
