import { createAsyncThunk } from "@reduxjs/toolkit";
import { isLoggedService } from "@src/apis/services/userService";

// export const isUserAlreadyLogin = createAsyncThunk("user/checkUser", async () => {
//   const response = await isLoggedService();
//   console.log(response);
//   return response;
// });

export const isUserAlreadyLogin = () => {
  const response = isLoggedService();
  console.log(response);

  return response;
};
