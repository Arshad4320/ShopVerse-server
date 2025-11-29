import { ICart } from "./cart.interface";
export declare const CartService: {
    createAddToCart: (payload: ICart) => Promise<(import("mongoose").Document<unknown, {}, ICart, {}, import("mongoose").DefaultSchemaOptions> & ICart & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }) | undefined>;
    getCartByUser: (userId: string) => Promise<(import("mongoose").Document<unknown, {}, ICart, {}, import("mongoose").DefaultSchemaOptions> & ICart & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }) | null | undefined>;
    updateCart: (userId: string, productId: string, quantity: number) => Promise<(import("mongoose").Document<unknown, {}, ICart, {}, import("mongoose").DefaultSchemaOptions> & ICart & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }) | undefined>;
    removeCartItem: (userId: string, productId: string) => Promise<import("mongoose").Document<unknown, {}, ICart, {}, import("mongoose").DefaultSchemaOptions> & ICart & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }>;
};
//# sourceMappingURL=cart.services.d.ts.map