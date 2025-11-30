import mongoose from "mongoose";
import { IProduct } from "./products.interface";
export declare const ProductSchema: mongoose.Model<IProduct, {}, {}, {}, mongoose.Document<unknown, {}, IProduct, {}, mongoose.DefaultSchemaOptions> & IProduct & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, mongoose.Schema<IProduct, mongoose.Model<IProduct, any, any, any, mongoose.Document<unknown, any, IProduct, any, {}> & IProduct & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, IProduct, mongoose.Document<unknown, {}, mongoose.FlatRecord<IProduct>, {}, mongoose.ResolveSchemaOptions<mongoose.DefaultSchemaOptions>> & mongoose.FlatRecord<IProduct> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>>;
//# sourceMappingURL=product.model.d.ts.map