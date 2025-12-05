export interface IUser {
  name: string;
  email: string;
  password: string;
  phone: string;
  userType?: "User" | "Admin";
}
