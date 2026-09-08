export type UserStatus = 'active' | 'blocked';
export type UserRole = 'user' | 'admin' | 'seller';
export interface UserResponse {
    userId: number;
    email: string;
    name: string;
    status: UserStatus;
    role: UserRole;
}
export interface UserWithPasswordResponse extends UserResponse {
    password: string;
}
export interface AuthenticatedUserResponse extends UserResponse {
    access_token: string;
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
