
export const baseUrl = import.meta.env.VITE_API_BASE_URL;

// userService
export const userServiceApi = {
  login: `${baseUrl}/users/login`,
  register: `${baseUrl}/users/register`,
  getUserById: `${baseUrl}/auth/users`,

  logout: `${baseUrl}/user/logout`,
  update: `${baseUrl}/user/update`,
};

// tokenService
export const tokenServiceApi = {
  refreshToken: `${baseUrl}/token/refresh`,
};

// mentorService
export const mentorServiceApi = {
  getMentorByMentorId: `${baseUrl}/auth/mentors/`,
  getMentorByUserId: `${baseUrl}/auth/mentors/by-user`,

  getMentors: `${baseUrl}/mentor/getAllMentors`,
  getMentor: `${baseUrl}/mentor/`,
  getPopularMentors: `${baseUrl}/mentor/getPopularMentors`,
};

// bookingService
export const bookingServiceApi = {
  getAllBookings: `${baseUrl}/booking/getAllBookings`,
  getBooking: `${baseUrl}/booking/getBooking`,
  bookMentor: `${baseUrl}/booking/bookMentor`,
  cancelBooking: `${baseUrl}/booking/cancelBooking`,
  createBooking: `${baseUrl}/booking/createBooking`,
};

// admin
export const adminServiceApi = {
  verify: `${baseUrl}/admin/verify`,
  getAllBookings: `${baseUrl}/admin/getAllBookings`,
};
