import { Request, Response } from "express";
export declare const OrderController: {
    getOrderQuery: (req: Request, res: Response) => Promise<void>;
    createOrder: (req: Request, res: Response) => Promise<void>;
    getOrderByUser: (req: Request, res: Response) => Promise<void>;
    getAllOrdersFromIntoDb: (req: Request, res: Response) => Promise<void>;
    updateOrder: (req: Request, res: Response) => Promise<void>;
    deleteOrder: (req: Request, res: Response) => Promise<void>;
};
//# sourceMappingURL=order.controller.d.ts.map