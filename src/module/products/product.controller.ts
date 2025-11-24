import { Request, Response } from "express";
import { ProductServices } from "./product.service";
import { uploadToCloudinary } from "../../utilits/cloudinary";
import { disconnect } from "process";

const createProduct = async (req: Request, res: Response) => {
  try {
    const payload = req.body;
    const file = req.file;

    let imageUrl = "";

    // Upload Image
    if (file) {
      imageUrl = (await uploadToCloudinary(
        file.buffer,
        file.originalname
      )) as string;
    }

    const price = Number(payload.price);
    const discount = Number(payload.discount);
    const quantity = Number(payload.quantity);
    payload.discountPrice =
      discount > 0 ? price - (price * discount) / 100 : price;

    const updatedPayload = {
      ...payload,
      price,
      quantity,
      discount,
      image: imageUrl,
    };

    const result = await ProductServices.createProduct(updatedPayload);

    res.status(200).json({
      success: true,
      message: "product created successfully",
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

const getProducts = async (req: Request, res: Response) => {
  try {
    const result = await ProductServices.getProducts();

    res.status(200).json({
      success: true,
      message: "data is retrived successfully",
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};
const getSingleProduct = async (req: Request, res: Response) => {
  try {
    const productId = req.params.id;

    if (!productId) {
      return res.status(404).json({
        success: false,
        message: "product id is not found",
      });
    }
    const result = await ProductServices.getSingleProduct(productId);
    res.status(200).json({
      success: true,
      message: "product is retrived successfully",
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

const updateProduct = async (req: Request, res: Response) => {
  try {
    const productId = req.params.id;
    const payload = req.body;
    const file = req.file;
    let imageUrl = "";
    if (file) {
      imageUrl = (await uploadToCloudinary(
        file.buffer,
        file.originalname
      )) as string;
    }
    const updatedPayload = {
      ...payload,
      price: Number(payload.price),
      quantity: Number(payload.quantity),
      image: imageUrl,
    };

    if (!productId) {
      return res.status(404).json({
        success: false,
        message: "product id is not found",
      });
    }

    const result = await ProductServices.updateProduct(
      productId,
      updatedPayload
    );
    res.status(200).json({
      success: true,
      message: "product update successfully",
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};
const deleteProduct = async (req: Request, res: Response) => {
  try {
    const productId = req.params.id;
    if (!productId) {
      return res.status(404).json({
        success: false,
        message: "product id is not found",
      });
    }
    const result = await ProductServices.deleteProduct(productId);
    res.status(200).json({
      success: true,
      message: "product deleted successfully",
    });
  } catch (err) {
    console.log(err);
  }
};

export const ProductController = {
  createProduct,
  getProducts,
  getSingleProduct,
  updateProduct,
  deleteProduct,
};
