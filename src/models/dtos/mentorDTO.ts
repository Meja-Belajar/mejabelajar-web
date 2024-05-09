import { getPopularMentorsResponse } from "../responses/mentorResponse";

export interface MentorDTO {
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
}

export const toMentorDTO = (data: getPopularMentorsResponse): MentorDTO[] => {
  return data.data.map((mentor) => ({
    mentor_id: mentor.mentor_id,
    username: mentor.username,
    university: mentor.university,
    email: mentor.email,
    phone: mentor.phone,
    description: mentor.description,
    profile_picture: mentor.profile_picture,
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
