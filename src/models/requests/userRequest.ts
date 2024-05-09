export interface RegisterUserRequest {
  user_name: string;
  email: string;
  phone_number: string;
  bod: Date | string;
  password: string;
  confirm_password: string;
  created_by: string;
}

export interface LoginUserRequest {
  email: string;
  password: string;
}

export interface UpdateUserRequest {
  user_name: string;
  email: string;
  phone_number: string;
  description: string;
  profile_picture: string;
  bod: Date | string;
}
