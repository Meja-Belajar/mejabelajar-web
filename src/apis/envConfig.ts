export const baseUrl: string = import.meta.env.VITE_API_BASE_URL;

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
  getPopularMentors: `${baseUrl}/auth/mentors/popular`,
  getAllMentors: `${baseUrl}/auth/mentors`,
  getMentorByMentorId: `${baseUrl}/auth/mentors`,
  getMentorByUserId: `${baseUrl}/auth/mentors/by-user`,

  registerMentor: `${baseUrl}/auth/mentors/register`,
};

// bookingService
export const bookingServiceApi = {
  getBookingsByUserId: `${baseUrl}/auth/bookings/user`,
  getBookingsByMentorId: `${baseUrl}/auth/bookings/mentor`,
  deleteBooking: `${baseUrl}/auth/booking`,
  createBooking: `${baseUrl}/auth/booking`,

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
