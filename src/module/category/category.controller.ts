import { Request, Response } from "express";
import { CategoryServices } from "./category.services";
import { uploadToCloudinary } from "../../utilits/cloudinary";

const createCategory = async (req: Request, res: Response) => {
  try {
    const payload = req.body;
    let imageUrl: string | undefined;
    if (req.file) {
      imageUrl = await uploadToCloudinary(
        req.file.buffer,
        req.file.originalname
      );
    }
    const updatedPayload = {
      ...payload,
      image: imageUrl,
    };
    const result = await CategoryServices.createCategory(updatedPayload);
    res.json({
      success: true,
      message: "Category created successfully",
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};
const getCategory = async (req: Request, res: Response) => {
  try {
    const result = await CategoryServices.getCategory();

    res.status(200).json({
      success: true,
      message: "category retrived successfully",
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

const getSingleCategory = async (req: Request, res: Response) => {
  try {
    const categoryId = req.params.id;
    if (!categoryId) {
      return res.status(404).json({
        success: false,
        message: "category is not found",
      });
    }
    const result = await CategoryServices.getSingleCategory(categoryId);
    res.status(200).json({
      success: true,
      message: "category is retrived successfully",
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

const updateCategory = async (req: Request, res: Response) => {
  try {
    const categoryId = req.params.id;
    const payload = req.body;
    if (!categoryId) {
      return res.status(404).json({
        success: false,
        message: "category id is not found",
      });
    }
    const result = await CategoryServices.updateCategory(categoryId, payload);
    res.status(200).json({
      success: true,
      message: "category update successfully",
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};
const deleteCategory = async (req: Request, res: Response) => {
  try {
    const categoryId = req.params.id;
    if (!categoryId) {
      return res.status(404).json({
        success: false,
        message: "category id is not found",
      });
    }
    const result = await CategoryServices.deleteCategory(categoryId);
    res.status(200).json({
      success: true,
      message: "data deleted successfully",
    });
  } catch (err) {
    console.log(err);
  }
};

export const CategoryController = {
  createCategory,
  getCategory,
  getSingleCategory,
  updateCategory,
  deleteCategory,
};
