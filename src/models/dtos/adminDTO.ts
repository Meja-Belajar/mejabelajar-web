import { ImageUrl } from "@src/assets/imageUrl";
import { ValidateAdminResponse } from "../responses/adminResponse";

export interface AdminDTO {
  admin_id: string;
  username: string;
  profile_picture?: string;
}

export const toAdminDTO = (data: ValidateAdminResponse): AdminDTO => {
  return {
    admin_id: data.data.id,
    username: data.data.user_name,
    profile_picture: data.data.profile_picture || ImageUrl.NO_PROFILE_IMAGE,
  };
};