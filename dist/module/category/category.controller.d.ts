import { Request, Response } from "express";
export declare const CategoryController: {
    createCategory: (req: Request, res: Response) => Promise<void>;
    getCategory: (req: Request, res: Response) => Promise<void>;
    getSingleCategory: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
    updateCategory: (req: Request, res: Response) => Promise<void>;
    deleteCategory: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
};
//# sourceMappingURL=category.controller.d.ts.map