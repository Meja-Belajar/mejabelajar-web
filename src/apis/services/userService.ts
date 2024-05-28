import { userServiceApi } from "@src/apis/envConfig";

import { UserDTO, toUserDTO } from "@src/models/dtos/userDTO";
import {
  LoginUserRequest,
  RegisterUserRequest,
  UpdateUserRequest,
} from "@src/models/requests/userRequest";
import {
  GetUserByIdResponse,
  LoginUserResponse,
  RegisterUserResponse,
  UpdateUserResponse,
} from "@src/models/responses/userResponse";

export class UserService {
  static async register(requestData: RegisterUserRequest): Promise<UserDTO> {
    console.log(requestData);
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
      if (e instanceof Error) {
        console.error(`Error registering user: ${e.name} - ${e.message}`);
      }
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

      const userDTO: UserDTO = toUserDTO(loginResponse);

      localStorage.setItem("user", JSON.stringify(userDTO));

      return userDTO;
    } catch (e) {
      if (e instanceof Error) {
        console.error(`Error logging in: ${e.name} - ${e.message}`);
      }
      throw new Error("Failed to login. Please try again.");
    }
  }

  /**
   * Check if user is logged in or not
   * @returns {UserDTO | null} - UserDTO if user is logged in, null otherwise
   */
  static async isLogged(): Promise<UserDTO | null> {
    if (localStorage.getItem("user")) {
      // get user from local storage to check if user is already logged in or not
      const user = JSON.parse(localStorage.getItem("user")!);

      try {
        const response = await UserService.getUserById({
          userId: user.user_id,
        });

        localStorage.setItem("user", JSON.stringify(response));

        return response;
      } catch (e) {
        if (e instanceof Error) {
          console.error(`Error fetching latest user data: ${e.name} - ${e.message}`);
        }
        return user;
      }
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

      const response = await fetch(userServiceApi.update, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(requestData),
      });

      const updateResponse: UpdateUserResponse = await response.json();

      if (updateResponse.code !== 200) {
        throw new Error(updateResponse.message);
      }
      return toUserDTO(updateResponse);
    } catch (e) {
      if (e instanceof Error) {
        console.error(`Error updating user: ${e.name} - ${e.message}`);
      }
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
      if (e instanceof Error) {
        console.error(`Error fetching user: ${e.name} - ${e.message}`);
      }
      throw new Error("Failed to fetch user");
    }
  }
}
