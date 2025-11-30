import { ObjectId } from "mongoose";
export interface ICart {
    user: ObjectId;
    item: {
        product: ObjectId;
        quantity: number;
        price: number;
    }[];
}
//# sourceMappingURL=cart.interface.d.ts.map