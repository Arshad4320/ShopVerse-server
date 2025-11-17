import { Request, Response } from "express";
import { UserServices } from "./user.services";
import { AuthRequest } from "../../middleware/auth.middleware";

const createUser = async (req: Request, res: Response) => {
  try {
    const payload = req.body;

    const result = await UserServices.createUser(payload);
    res.json({
      success: true,
      message: "user created successfully",
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

const loginUser = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    const result = await UserServices.loginUser(email, password);
    res.json({
      success: true,
      message: "user login successfully",
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};
const getAllUser = async (req: Request, res: Response) => {
  try {
    const result = await UserServices.getAllUser();
    res.json({
      success: true,
      message: "Users retrived successfully",
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

const getSingleUser = async (req: Request, res: Response) => {
  try {
    const userId = req.params.id;
    if (!userId) throw new Error("user not found");
    const result = await UserServices.getSingleUser(userId);
    res.json({
      success: true,
      message: "User retrived successfully",
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};
const updateUser = async (req: Request, res: Response) => {
  try {
    const userId = req.params.id;
    if (!userId) throw new Error("user not found");
    const payload = req.body;
    const result = await UserServices.updateUser(userId, payload);
    res.json({
      success: true,
      message: "user update successfully",
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

const deleteUser = async (req: Request, res: Response) => {
  try {
    const userId = req.params.id;
    if (!userId) throw new Error("user not found");
    const result = await UserServices.deleteUser(userId);
    res.json({
      success: true,
      message: "user deleted successfully",
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};
const getMyProfile = async (req: AuthRequest, res: Response) => {
  const userId = req.user.id;
  const user = await UserServices.selfGetUser(userId);
  res.json({ success: true, data: user });
};
const updateMyProfile = async (req: AuthRequest, res: Response) => {
  const userId = req.user.id;
  const updated = await UserServices.selfUpdateUser(userId, req.body);
  res.json({ success: true, data: updated });
};
export const UserController = {
  createUser,
  getAllUser,
  getSingleUser,
  updateUser,
  deleteUser,
  loginUser,
  getMyProfile,
  updateMyProfile,
};
