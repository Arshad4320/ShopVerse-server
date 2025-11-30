"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.categoryRoute = void 0;
const express_1 = __importDefault(require("express"));
const category_controller_1 = require("./category.controller");
const uploade_1 = require("../../middleware/uploade");
const router = express_1.default.Router();
router.post("/category-create", uploade_1.upload.single("image"), category_controller_1.CategoryController.createCategory);
router.get("/category", category_controller_1.CategoryController.getCategory);
router.get("/category/:id", category_controller_1.CategoryController.getSingleCategory);
router.patch("/category-update/:id", uploade_1.upload.single("image"), category_controller_1.CategoryController.updateCategory);
router.delete("/category-delete/:id", category_controller_1.CategoryController.deleteCategory);
exports.categoryRoute = router;
//# sourceMappingURL=category.route.js.map