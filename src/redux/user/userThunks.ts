import { createAsyncThunk } from "@reduxjs/toolkit";
import { UserService } from "@src/apis/services/userService";

// export const isUserAlreadyLogin = createAsyncThunk("user/checkUser", async () => {
//   const response = await isLoggedService();
//   console.log(response);
//   return response;
// });

export const isUserAlreadyLogin = () => {
  const response = UserService.isLogged();

  return response;
};
