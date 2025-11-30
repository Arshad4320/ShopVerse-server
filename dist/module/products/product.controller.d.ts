import { Request, Response } from "express";
export declare const ProductController: {
    createProduct: (req: Request, res: Response) => Promise<void>;
    getProductsQuery: (req: Request, res: Response) => Promise<void>;
    getProducts: (req: Request, res: Response) => Promise<void>;
    getSingleProduct: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
    updateProduct: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
    deleteProduct: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
};
//# sourceMappingURL=product.controller.d.ts.map