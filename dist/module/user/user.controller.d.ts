import { Request, Response } from "express";
import { AuthRequest } from "../../middleware/auth.middleware";
export declare const UserController: {
    createUser: (req: Request, res: Response) => Promise<void>;
    getAllUser: (req: Request, res: Response) => Promise<void>;
    getSingleUser: (req: Request, res: Response) => Promise<void>;
    updateUser: (req: Request, res: Response) => Promise<void>;
    deleteUser: (req: Request, res: Response) => Promise<void>;
    loginUser: (req: Request, res: Response) => Promise<void>;
    getMyProfile: (req: AuthRequest, res: Response) => Promise<void>;
    updateMyProfile: (req: AuthRequest, res: Response) => Promise<void>;
};
//# sourceMappingURL=user.controller.d.ts.map