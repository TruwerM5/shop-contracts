export type UserStatus = "active" | "blocked";
export type UserRole = "user" | "admin" | "seller";
export type UnknownUserResponse =
  | UserResponse
  | {
      userId: null;
    };
export interface UserResponse {
  userId: number;
  email: string;
  name: string;
  status: UserStatus;
  role: UserRole;
}
export interface GitHubUserResponse {
  id: number;
  login: string;
  email: string | null;
  name: string | null;
  avatar_url: string;
}
export interface UserAndJwtExpirationResponse extends UserResponse {
  iat: number;
  exp: number;
}
export interface UserWithPasswordResponse extends UserResponse {
  password: string | null;
}
export interface AuthenticatedUserResponse extends UserResponse {
  access_token: string;
  newCartToken?: string;
}
export interface LoginRequest {
  email: string;
  password: string;
}
export interface SignupRequest extends LoginRequest {
  name: string;
  confirmPassword: string;
}
export interface LogoutRequest {
  success: boolean;
}
