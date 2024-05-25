/**
 * @description: This file contains all the environment variables for the application
 */

export const baseUrl: string = import.meta.env.VITE_API_BASE_URL;

export const userServiceApi = {
  login: `${baseUrl}/users/login`,
  register: `${baseUrl}/users/register`,
  getUserById: `${baseUrl}/auth/users`,

  logout: `${baseUrl}/user/logout`,
  update: `${baseUrl}/user/update`,
};

// mentorService
export const mentorServiceApi = {
  getPopularMentors: `${baseUrl}/auth/mentors/popular`,
  getAllMentors: `${baseUrl}/auth/mentors`,
  getMentorByMentorId: `${baseUrl}/auth/mentors`,
  getMentorByUserId: `${baseUrl}/auth/mentors/by-user`,
  registerMentor: `${baseUrl}/auth/mentors/register`,
};

// bookingService
export const bookingServiceApi = {
  getAllBookings: `${baseUrl}/auth/bookings`,
  getBookingsByUserId: `${baseUrl}/auth/bookings/user`,
  getBookingByBookingId: `${baseUrl}/auth/booking`,
  getBookingsByMentorId: `${baseUrl}/auth/bookings/mentor`,
  deleteBooking: `${baseUrl}/auth/booking`,
  createBooking: `${baseUrl}/auth/booking`,
};

// mentor review
export const mentorReviewServiceApi = {
  getMentorReviewsByMentorId: `${baseUrl}/auth/mentor-review`,
  createMentorReview: `${baseUrl}/auth/mentor-review/create`,
  updateMentorReview: `${baseUrl}/auth/mentor-review/update`,
};

// course 
export const courseServiceApi = {
  getCourseByMentorId: `${baseUrl}/auth/courses`,
  createCourse: `${baseUrl}/auth/courses/create`,
  updateCourse: `${baseUrl}/auth/courses/update`,
}

// admin
export const adminServiceApi = {
  verify: `${baseUrl}/admin/verify`,
};

// notification
export const notificationServiceApi = {
  getAllNotificationsByUserId: `${baseUrl}/auth/bookings/notification`,
};


