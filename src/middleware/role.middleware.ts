// src/middleware/role.middleware.ts
import { Response, NextFunction } from "express";
import { AuthRequest } from "./auth.middleware";

export const authorize =
  (...allowedRoles: string[]) =>
  (req: AuthRequest, res: Response, next: NextFunction) => {
    try {
      const userRole = req.user?.userType;

      if (!allowedRoles.includes(userRole)) {
        return res.status(403).json({
          success: false,
          message: "Forbidden — you are not allowed",
        });
      }

      next();
    } catch (err) {
      return res.status(403).json({
        success: false,
        message: "Access denied",
      });
    }
  };
