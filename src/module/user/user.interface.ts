export interface IUser {
  name: string;
  email: string;
  password: string;
  phone: string;
  address?: {
    name: string;
    phone: string;
    upozilla: string;
    city: string;
  };
  userType: "Admin" | "User";
}
