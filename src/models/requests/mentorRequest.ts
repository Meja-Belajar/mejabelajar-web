import { MentorDTO } from "../dtos/mentorDTO";

export interface RegisterMentorRequest {
  user_id: string;
  user_name: string;
  university: string;
  email: string;
  phone_number: string;
  description: string;
  profile_picture: string;
  bod: string;
  courses: string[];
  created_by: string;
  updated_by: string;
}

export interface GetMentorByMentorIdRequest {
  mentor_id: string;
}

export interface GetMentorByUserIdRequest {
  user_id: string;
}

export interface UpdateMentorRequest {
  mentor_id: string;
  user_name: string;
  university: string;
  email: string;
  phone_number: string;
  description?: string;
  profile_picture?: string;
  bod: string;
  is_active: boolean;
}

export const toUpdateMentorRequest = (data: MentorDTO): UpdateMentorRequest => {
  return {
    mentor_id: data.mentor_id,
    user_name: data.username,
    university: data.university,
    email: data.email,
    phone_number: data.phone_number,
    description: data.description,
    profile_picture: data.profile_picture,
    bod: data.bod,
    is_active: true,
  };
};
