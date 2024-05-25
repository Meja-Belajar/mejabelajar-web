export interface RegisterUserRequest {
  user_name: string;
  university: string;
  email: string;
  phone_number: string;
  bod: string;
  profile_picture?: string;
  password: string;
  confirm_password: string;
}

export interface LoginUserRequest {
  email: string;
  password: string;
}

export interface UpdateUserRequest {
  id: string;
  user_name: string;
  email: string;
  phone_number: string;
  description?: string;
  profile_picture?: string;
  university: string;
  bod: string;
}

export interface GetUserByIdRequest {
  userId: string;
}
