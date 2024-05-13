import { BaseResponse } from "./baseResponse";

export interface getPopularMentorsResponse extends BaseResponse {
  data: {
    mentor_id: string;
    username: string;
    university: string;
    email: string;
    phone: string;
    description: string;
    profile_picture: string;
    bod: string;
    revenue: number;
    rating: number;
    total_teaching_hours: number;
    teaching_frequency: number;
    courses: {
      course_id: string;
      name: string;
      detail: string;
      rating: number;
      hourly_rate: number;
      course_start_time: string;
      course_end_time: string;
    }[];
    reviews: {
      review_id: string;
      description: string;
    }[];
  }[];
}

export interface getMentorQueryResponse extends BaseResponse {
  data: {
    mentor_id: string;
    username: string;
    university: string;
    email: string;
    phone: string;
    description: string;
    profile_picture: string;
    bod: string;
    revenue: number;
    rating: number;
    total_teaching_hours: number;
    teaching_frequency: number;
    courses: {
      course_id: string;
      name: string;
      detail: string;
      rating: number;
      hourly_rate: number;
      course_start_time: string;
      course_end_time: string;
    }[];
    reviews: {
      review_id: string;
      description: string;
    }[];
  }[];
}

export interface getMentorByIdResponse extends BaseResponse {
  data: {
    mentor_id: string;
    username: string;
    university: string;
    email: string;
    phone: string;
    description: string;
    profile_picture: string;
    bod: string;
    revenue: number;
    rating: number;
    total_teaching_hours: number;
    teaching_frequency: number;
    courses: {
      course_id: string;
      name: string;
      detail: string;
      rating: number;
      hourly_rate: number;
      course_start_time: string;
      course_end_time: string;
    }[];
    reviews: {
      review_id: string;
      description: string;
    }[];
  };
}
