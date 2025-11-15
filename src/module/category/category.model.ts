import { model, Schema } from "mongoose";
import { ICategory } from "./category.interface";

const CategorySchema = new Schema<ICategory>(
  {
    name: {
      type: String,
      required: true,
    },
    details: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const Category = model("Category", CategorySchema);
