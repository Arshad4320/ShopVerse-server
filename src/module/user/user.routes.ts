// src/modules/user/user.routes.ts

import express from "express";
import { UserController } from "./user.controller";
import { authorize } from "../../middleware/role.middleware";
import { verifyToken } from "../../middleware/verifyToken";

const router = express.Router();

// PUBLIC ROUTES
router.post("/register-user", UserController.createUser);
router.post("/login-user", UserController.loginUser);

// USER SELF ROUTES
router.get("/me", verifyToken, UserController.getMyProfile);
router.put("/update-me", verifyToken, UserController.updateMyProfile);

// ADMIN ONLY ROUTES
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

router.put(
  "/update-user/:id",
  verifyToken,
  authorize("Admin"),
  UserController.updateUser
);

router.delete(
  "/:id",
  verifyToken,
  authorize("Admin"),
  UserController.deleteUser
);

export const userRoute = router;
