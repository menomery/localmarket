export type UserRole = "customer" | "seller" | "admin";

export interface UserProfile {
  uid: string;
  name: string;
  email: string;
  phone?: string;
  photoURL?: string;
  role: UserRole;
  isActive: boolean;
  createdAt: number;
  updatedAt: number;
}
