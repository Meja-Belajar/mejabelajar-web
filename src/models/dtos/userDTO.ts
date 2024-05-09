import {
  LoginUserResponse,
  RegisterUserResponse,
} from "../responses/userResponse";

export interface UserDTO {
  id: string;
  username: string;
  email: string;
  phone_number: string;
  description?: string;
  profile_picture?: string;
  bod: Date;
}

export const toUserDTO = (
  data: LoginUserResponse | RegisterUserResponse,
): UserDTO => {
  return {
    id: data.data.id,
    username: data.data.username,
    email: data.data.email,
    phone_number: data.data.phone_number,
    description: data.data.description,
    profile_picture: data.data.profile_picture,
    bod: data.data.bod,
  }
};
