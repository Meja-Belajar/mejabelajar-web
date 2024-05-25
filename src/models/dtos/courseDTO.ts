/**
 * @description CourseDTO is a data transfer object that represents the data of a course.
 */
export interface CourseDTO {
  course_id: string;
  name: string;
  detail: string;
  rating: number;
  hourly_rate: number;
  course_start_time: string;
  course_end_time: string;
}
