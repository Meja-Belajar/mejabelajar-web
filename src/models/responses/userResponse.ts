import { BaseResponse } from "./baseResponse";

export interface LoginUserResponse extends BaseResponse {
  data: {
    id: string;
    username: string;
    email: string;
    phone_number: string;
    description?: string;
    profile_picture?: string;
    bod: Date; 
    is_active: boolean;
    created_by: string; 
    updated_by: string;
    created_at: Date; 
    updated_at: Date;
  };
}

export interface RegisterUserResponse extends BaseResponse {
  data: {
    id: string;
    username: string;
    email: string;
    phone_number: string;
    description?: string;
    profile_picture?: string;
    bod: Date; 
    is_active: boolean;
    created_by: string; 
    updated_by: string;
    created_at: Date; 
    updated_at: Date;
  };
}
