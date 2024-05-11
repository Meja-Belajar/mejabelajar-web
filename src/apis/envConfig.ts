export const baseUrl = import.meta.env.VITE_API_BASE_URL;

// userService
export const userServiceApi = {
  login: `${baseUrl}/user/login`,
  register: `${baseUrl}/user/register`,
  logout: `${baseUrl}/user/logout`,
  update: `${baseUrl}/user/update`,
};

// tokenService
export const tokenServiceApi = {
  refreshToken: `${baseUrl}/token/refresh`,
};

// mentorService
export const mentorServiceApi = {
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
};

// admin
export const adminServiceApi = {
  verify: `${baseUrl}/admin/verify`,
  getAllBookings: `${baseUrl}/admin/getAllBookings`,
};
