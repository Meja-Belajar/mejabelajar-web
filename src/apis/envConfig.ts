// userService
export const userServiceApi = {
  login     : import.meta.env.VITE_API_LOGIN,
  register  : import.meta.env.VITE_API_REGISTER,
  logout    : import.meta.env.VITE_API_LOGOUT,
};

// tokenService
export const tokenServiceApi = {
  refreshToken : import.meta.env.VITE_API_REFRESH_TOKEN,
};

// mentorService
export const mentorServiceApi = {
  getMentors : import.meta.env.VITE_API_GET_MENTORS,
  getMentor  : import.meta.env.VITE_API_GET_MENTOR, 
};
