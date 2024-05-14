import { ImageUrl } from "@src/assets/imageUrl";
import {
  GetAllMentorApplicationResponse,
  GetMentorByIdResponse,
  GetPopularMentorsResponse,
} from "../responses/mentorResponse";
import { CourseDTO } from "./courseDTO";
import { ReviewDTO } from "./reviewDTO";

export interface MentorDTO {
  username: string;
  university: string;
  email: string;
  phone_number: string;
  description?: string;
  profile_picture?: string;
  bod: string;

  mentor_id: string;
  revenue: number;
  rating: number;
  total_teaching_hours: number;
  teaching_frequency: number;

  courses: CourseDTO[];
  reviews: ReviewDTO[];
}

export const toMentorsDTO = (
  data: GetPopularMentorsResponse | GetAllMentorApplicationResponse,
): MentorDTO[] => {
  return data.data.map((mentor) => ({
    mentor_id: mentor.mentor_id,
    username: mentor.user_name,
    university: mentor.university,
    email: mentor.email,
    phone_number: mentor.phone_number,
    description: mentor.description || "Hi, I'm a mentor!",
    profile_picture: mentor.profile_picture || ImageUrl.NO_PROFILE_IMAGE,
    bod: mentor.bod,
    revenue: mentor.revenue,
    rating: mentor.rating,
    total_teaching_hours: mentor.total_teaching_hours,
    teaching_frequency: mentor.teaching_frequency,
    courses: mentor.courses.map((course) => ({
      course_id: course.course_id,
      name: course.name,
      detail: course.detail,
      rating: course.rating,
      hourly_rate: course.hourly_rate,
      course_start_time: course.course_start_time,
      course_end_time: course.course_end_time,
    })),
    reviews: mentor.reviews.map((review) => ({
      review_id: review.review_id,
      description: review.description,
    })),
  }));
};

export const toMentorDTO = (data: GetMentorByIdResponse): MentorDTO => {
  return {
    mentor_id: data.data.mentor_id,
    username: data.data.user_name,
    university: data.data.university,
    email: data.data.email,
    phone_number: data.data.phone_number,
    description: data.data.description || "Hi, I'm a mentor!",
    profile_picture: data.data.profile_picture || ImageUrl.NO_PROFILE_IMAGE,
    bod: data.data.bod,
    revenue: data.data.revenue,
    rating: data.data.rating,
    total_teaching_hours: data.data.total_teaching_hours,
    teaching_frequency: data.data.teaching_frequency,
    courses: data.data.courses.map((course) => ({
      course_id: course.course_id,
      name: course.name,
      detail: course.detail,
      rating: course.rating,
      hourly_rate: course.hourly_rate,
      course_start_time: course.course_start_time,
      course_end_time: course.course_end_time,
    })),
    reviews: data.data.reviews.map((review) => ({
      review_id: review.review_id,
      description: review.description,
    })),
  };
};
