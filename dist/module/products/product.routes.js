"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.productRouter = void 0;
const express_1 = __importDefault(require("express"));
const product_controller_1 = require("./product.controller");
const uploade_1 = require("../../middleware/uploade");
const router = express_1.default.Router();
router.post("/product-create", uploade_1.upload.single("image"), product_controller_1.ProductController.createProduct);
router.get("/products", product_controller_1.ProductController.getProducts);
router.get("/products/query", product_controller_1.ProductController.getProductsQuery);
router.get("/product/:id", product_controller_1.ProductController.getSingleProduct);
router.patch("/product-update/:id", uploade_1.upload.single("image"), product_controller_1.ProductController.updateProduct);
router.delete("/product-delete/:id", product_controller_1.ProductController.deleteProduct);
exports.productRouter = router;
//# sourceMappingURL=product.routes.js.map