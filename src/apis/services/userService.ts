import { userServiceApi } from "@src/apis/envConfig";

import {
  UserDTO,
  fromLoginResponseToDTO,
  toUserDTO,
} from "@src/models/dtos/userDTO";
import {
  LoginUserRequest,
  RegisterUserRequest,
  UpdateUserRequest,
} from "@src/models/requests/userRequest";
import {
  Example,
  GetUserByIdResponse,
  LoginUserResponse,
  RegisterUserResponse,
  UpdateUserResponse,
} from "@src/models/responses/userResponse";

export class UserService {
  static async register(requestData: RegisterUserRequest): Promise<UserDTO> {
    try {
      const response = await fetch(userServiceApi.register, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(requestData),
      });

      const registerResponse: RegisterUserResponse = await response.json();

      if (registerResponse.code !== 201) {
        throw new Error(registerResponse.message);
      }

      const userDTO: UserDTO = toUserDTO(registerResponse);

      localStorage.setItem("user", JSON.stringify(userDTO));

      return userDTO;
    } catch (e) {
      console.error("Error registering user:", e);
      throw new Error(`Failed to register user. Please try again.`);
    }
  }

  static async login(requestData: LoginUserRequest): Promise<UserDTO> {
    try {
      const response = await fetch(userServiceApi.login, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(requestData),
      });

      const loginResponse: LoginUserResponse = await response.json();

      if (loginResponse.code !== 200) {
        throw new Error(loginResponse.message);
      }

      const userDTO: UserDTO = fromLoginResponseToDTO(loginResponse);

      localStorage.setItem("user", JSON.stringify(userDTO));

      return userDTO;
    } catch (e) {
      console.error("Error login user:", e);
      throw new Error("Failed to login. Please try again.");
    }
  }

  static isLogged(): UserDTO | null {
    if (localStorage.getItem("user")) {
      return JSON.parse(localStorage.getItem("user")!);
    } else {
      return null;
    }
  }

  static logOut() {
    if (localStorage.getItem("user")) {
      localStorage.removeItem("user");
    }

    return null;
  }

  static async update(requestData: UpdateUserRequest): Promise<UserDTO> {
    try {
      // const response = await fetch(userServiceApi.update, {
      //   method: "PUT",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify(requestData),
      // });

      const updateResponse: UpdateUserResponse = Example.UpdateUserResponse;

      if (updateResponse.code !== 200) {
        throw new Error(updateResponse.message);
      }

      return toUserDTO(updateResponse);
    } catch (e) {
      console.error("Error updating user:", e);
      throw new Error("Failed to update user. Please try again.");
    }
  }

  static async getUserById({ userId }: { userId: string }): Promise<UserDTO> {
    try {
      const response = await fetch(`${userServiceApi.getUserById}/${userId}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      });

      const userResponse: GetUserByIdResponse = await response.json();

      if (userResponse.code !== 200) {
        throw new Error(userResponse.message);
      }

      return toUserDTO(userResponse);
    } catch (e) {
      console.error("Error fetching user:", e);
      throw new Error("Failed to fetch user");
    }
  }
}
