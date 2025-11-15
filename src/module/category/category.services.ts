import { ICategory } from "./category.interface";
import { Category } from "./category.model";

const createCategory = async (payload: ICategory) => {
  try {
    const result = await Category.create(payload);
    return result;
  } catch (err) {
    console.log(err);
  }
};
const getCategory = async () => {
  try {
    const result = await Category.find();
    return result;
  } catch (err) {
    console.log(err);
  }
};
const getSingleCategory = async (id: string) => {
  try {
    const result = await Category.findById(id);
    return result;
  } catch (err) {
    console.log(err);
  }
};
const updateCategory = async (id: string, payload: ICategory) => {
  try {
    const result = await Category.findByIdAndUpdate(id, payload, { new: true });
    return result;
  } catch (err) {
    console.log(err);
  }
};

const deleteCategory = async (id: string) => {
  try {
    const result = await Category.findByIdAndDelete(id);
    return result;
  } catch (err) {
    console.log(err);
  }
};

export const CategoryServices = {
  createCategory,
  getCategory,
  getSingleCategory,
  updateCategory,
  deleteCategory,
};
