import { useDispatch } from "react-redux";

import { createAsyncThunk } from "@reduxjs/toolkit";

import { UserService } from "@src/apis/services/userService.ts";

import { UserDTO } from "@src/models/dtos/userDTO";

// export const isUserAlreadyLogin = createAsyncThunk("user/checkUser", async () => {
//   const response = await isLoggedService();
//   console.log(response);
//   return response;
// });

export const isUserAlreadyLogin = async () => {
  const response = await UserService.isLogged();

  return response;
};
