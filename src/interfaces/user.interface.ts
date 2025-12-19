import type { UserRole } from "../enums/user-role.enum";

export interface User {
  uui: string;
  fullName: string;
  email: string;
  phoneNumber: string;
  role: UserRole;
  createdAt: string;
  updatedAt: string;
}
