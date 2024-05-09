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
    profile_picture:
      data.data.profile_picture ||
      "https://t4.ftcdn.net/jpg/03/59/58/91/360_F_359589186_JDLl8dIWoBNf1iqEkHxhUeeOulx0wOC5.jpg",
    bod: data.data.bod,
  };
};
