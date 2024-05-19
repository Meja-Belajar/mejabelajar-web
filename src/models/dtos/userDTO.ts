import { ImageUrl } from "@src/assets/imageUrl";
import {
  GetUserByIdResponse,
  LoginUserResponse,
  RegisterUserResponse,
  UpdateUserResponse,
} from "../responses/userResponse";

export interface UserDTO {
  user_id: string;
  username: string;
  university: string;
  email: string;
  phone_number: string;
  description?: string;
  profile_picture?: string;
  bod: string;
  isMentor: boolean;
}

export const toUserDTO = (
  data:
    | LoginUserResponse
    | RegisterUserResponse
    | UpdateUserResponse
    | GetUserByIdResponse,
): UserDTO => {
  return {
    user_id: data.data.id,
    username: data.data.user_name,
    university: data.data.university,
    email: data.data.email,
    phone_number: data.data.phone_number,
    description: data.data.description,
    profile_picture: data.data.profile_picture || ImageUrl.NO_PROFILE_IMAGE,
    bod: data.data.bod,
    isMentor: data.data.is_mentor,
  };
};
