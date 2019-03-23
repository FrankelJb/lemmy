export enum UserOperation {
  Login, Register, CreateCommunity
}

export interface User {
  id: number
  username: string;
}

export interface LoginForm {
  username_or_email: string;
  password: string;
}

export interface RegisterForm {
  username: string;
  email?: string;
  password: string;
  password_verify: string;
}

export interface CommunityForm {
  name: string;
  updated?: number
}

export interface PostForm {
  name: string;
  url: string;
  attributed_to: string;
  updated?: number
}
