import { IOrder } from "./order.interface";
export declare const OrderServices: {
    createOrder: (userId: string, payload: IOrder) => Promise<(import("mongoose").Document<unknown, {}, IOrder, {}, import("mongoose").DefaultSchemaOptions> & IOrder & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }) | undefined>;
    getOrderByUser: (userId: string) => Promise<(import("mongoose").Document<unknown, {}, IOrder, {}, import("mongoose").DefaultSchemaOptions> & IOrder & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    })[] | undefined>;
    getOrdersQuery: (query: any) => Promise<{
        result: (import("mongoose").Document<unknown, {}, IOrder, {}, import("mongoose").DefaultSchemaOptions> & IOrder & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v: number;
        })[];
        meta: {
            total: number;
            page: number;
            limit: number;
            totalPage: number;
        };
    } | undefined>;
    getAllOrderFromIntoDb: () => Promise<(import("mongoose").Document<unknown, {}, IOrder, {}, import("mongoose").DefaultSchemaOptions> & IOrder & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    })[] | undefined>;
    updateOrder: (orderId: string, payload: IOrder) => Promise<(import("mongoose").Document<unknown, {}, IOrder, {}, import("mongoose").DefaultSchemaOptions> & IOrder & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }) | null | undefined>;
    deleteOrder: (id: string) => Promise<(import("mongoose").Document<unknown, {}, IOrder, {}, import("mongoose").DefaultSchemaOptions> & IOrder & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }) | null | undefined>;
};
//# sourceMappingURL=order.services.d.ts.map