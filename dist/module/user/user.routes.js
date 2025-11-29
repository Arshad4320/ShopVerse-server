"use strict";
// // src/modules/user/user.routes.ts
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRoute = void 0;
// import express from "express";
// import { UserController } from "./user.controller";
// import { authorize } from "../../middleware/role.middleware";
// import { verifyToken } from "../../middleware/verifyToken";
// const router = express.Router();
// router.post("/register-user", UserController.createUser);
// router.post("/login-user", UserController.loginUser);
// router.get("/self-user", verifyToken, UserController.getMyProfile);
// router.patch("/self-user/update", verifyToken, UserController.updateMyProfile);
// router.get(
//   "/get-users",
//   verifyToken,
//   authorize("Admin"),
//   UserController.getAllUser
// );
// router.get(
//   "/get-user/:id",
//   verifyToken,
//   authorize("Admin"),
//   UserController.getSingleUser
// );
// router.patch(
//   "/update-user/:id",
//   verifyToken,
//   authorize("Admin"),
//   UserController.updateUser
// );
// router.delete(
//   "/delete-user/:id",
//   verifyToken,
//   authorize("Admin"),
//   UserController.deleteUser
// );
// export const userRoute = router;
// src/modules/user/user.routes.ts
const express_1 = __importDefault(require("express"));
const user_controller_1 = require("./user.controller");
const role_middleware_1 = require("../../middleware/role.middleware");
const verifyToken_1 = require("../../middleware/verifyToken");
const router = express_1.default.Router();
router.post("/register-user", user_controller_1.UserController.createUser);
router.post("/login-user", user_controller_1.UserController.loginUser);
router.get("/self-user", verifyToken_1.verifyToken, user_controller_1.UserController.getMyProfile);
router.patch("/self-user/update", verifyToken_1.verifyToken, user_controller_1.UserController.updateMyProfile);
router.get("/get-users", user_controller_1.UserController.getAllUser);
router.get("/get-user/:id", user_controller_1.UserController.getSingleUser);
router.patch("/update-user/:id", (0, role_middleware_1.authorize)("Admin"), user_controller_1.UserController.updateUser);
router.delete("/delete-user/:id", (0, role_middleware_1.authorize)("Admin"), user_controller_1.UserController.deleteUser);
exports.userRoute = router;
//# sourceMappingURL=user.routes.js.map