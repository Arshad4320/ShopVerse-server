import { IUser } from "./user.interface";
import { User } from "./user.model";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const createUser = async (payload: IUser) => {
  try {
    const exist = await User.findOne({ email: payload.email });
    if (exist) throw new Error("Email already registered");
    const hashedPassword = await bcrypt.hash(payload.password, 10);
    const result = await User.create({
      ...payload,
      password: hashedPassword,
    });
    return result;
  } catch (err: any) {
    console.log(err);
    throw new Error(err.message || "Failed to create user");
  }
};
const loginUser = async (email: string, password: string) => {
  try {
    const user = await User.findOne({ email });
    if (!user) throw new Error("user not found please create account");
    const isCompare = await bcrypt.compare(password, user.password);
    if (!isCompare) throw new Error("wrong credential try again!");
    const token = jwt.sign(
      {
        id: user._id,
        email: user.email,
        userType: user.userType,
      },
      process.env.JWT_SECRET!,
      { expiresIn: "7d" }
    );
    return { user, token };
  } catch (err: any) {
    console.log(err);
    throw new Error(err.message || "Failed to login user");
  }
};
const getAllUser = async () => {
  try {
    const result = await User.find();
    return result;
  } catch (err: any) {
    console.log(err);
    throw new Error(err.message || "Failed to get user");
  }
};

const getSingleUser = async (userId: string) => {
  try {
    const result = await User.findById(userId);
    return result;
  } catch (err: any) {
    console.log(err);
    throw new Error(err.message || "Failed to get user");
  }
};
const updateUser = async (userId: string, payload: IUser) => {
  try {
    if (payload?.password) {
      payload.password = await bcrypt.hash(payload.password, 10);
    }
    const result = await User.findByIdAndUpdate(userId, payload, {
      new: true,
    });
    return result;
  } catch (err: any) {
    console.log(err);
    throw new Error(err.message || "Failed to update user");
  }
};

const deleteUser = async (userId: string) => {
  try {
    const result = await User.findByIdAndDelete(userId, { new: true });
    return result;
  } catch (err: any) {
    console.log(err);
    throw new Error(err.message || "Failed to delete user");
  }
};
const selfGetUser = async (userId: string) => {
  try {
    return await User.findById(userId);
  } catch (err) {
    console.log(err);
  }
};
const selfUpdateUser = async (userId: string, payload: Partial<IUser>) => {
  try {
    if (payload.password) {
      payload.password = await bcrypt.hash(payload.password, 10);
    }

    return await User.findByIdAndUpdate(userId, payload, {
      new: true,
    });
  } catch (err: any) {
    console.log(err);
    throw new Error(err.message || "Failed to update profile ");
  }
};
export const UserServices = {
  createUser,
  loginUser,
  updateUser,
  getAllUser,
  getSingleUser,
  deleteUser,
  selfGetUser,
  selfUpdateUser,
};
