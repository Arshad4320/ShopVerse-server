import mongoose, { model, Schema } from "mongoose";
import { IProduct } from "./products.interface";

const ProductModel = new Schema<IProduct>(
  {
    categoryId: {
      type: Schema.Types.ObjectId,
      ref: "Category",
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },

    quantity: {
      type: Number,
      required: true,
    },
    brand: {
      type: String,
      required: true,
    },
    tags: {
      type: String,
    },
    description: {
      type: String,
      required: true,
    },
    discount: {
      type: Number,
    },
    discountPrice: {
      type: Number,
    },
    images: {
      type: [String],
      required: true,
    },
    sizes: {
      type: [String],
    },
  },
  {
    timestamps: true,
  }
);
export const ProductSchema = model("Product", ProductModel);
