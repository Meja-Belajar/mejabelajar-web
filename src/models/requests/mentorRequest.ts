export interface MentorApplicationRequest {
  user_id: string;
  user_name: string;
  university: string;
  email: string;
  phone_number: string;
  description: string;
  profile_picture: string;
  bod: string;
}

export interface GetMentorByIdRequest {
  mentor_id: string;
}
