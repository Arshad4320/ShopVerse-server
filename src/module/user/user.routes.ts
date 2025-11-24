// src/modules/user/user.routes.ts

import express from "express";
import { UserController } from "./user.controller";
import { authorize } from "../../middleware/role.middleware";
import { verifyToken } from "../../middleware/verifyToken";

const router = express.Router();

router.post("/register-user", UserController.createUser);
router.post("/login-user", UserController.loginUser);

router.get("/self-user", verifyToken, UserController.getMyProfile);
router.patch("/self-user/update", verifyToken, UserController.updateMyProfile);

router.get(
  "/get-users",
  verifyToken,
  authorize("Admin"),
  UserController.getAllUser
);

router.get(
  "/get-user/:id",
  verifyToken,
  authorize("Admin"),
  UserController.getSingleUser
);

router.patch(
  "/update-user/:id",
  verifyToken,
  authorize("Admin"),
  UserController.updateUser
);

router.delete(
  "/delete-user/:id",
  verifyToken,
  authorize("Admin"),
  UserController.deleteUser
);

export const userRoute = router;
