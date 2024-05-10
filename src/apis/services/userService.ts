import { userServiceApi } from "@src/apis/envConfig";
import { UserDTO, toUserDTO } from "@src/models/dtos/userDTO";
import {
  LoginUserRequest,
  RegisterUserRequest,
  UpdateUserRequest,
} from "@src/models/requests/userRequest";
import {
  LoginUserResponse,
  RegisterUserResponse,
} from "@src/models/responses/userResponse";

export class UserService {
  static async register(requestData: RegisterUserRequest): Promise<UserDTO> {
    const {
      user_name,
      email,
      password,
      phone_number,
      bod,
      confirm_password,
      created_by,
    } = requestData;
    const apiurl = userServiceApi.register;

    try {
      const response = await fetch(apiurl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user_name,
          email,
          password,
          phone_number,
          bod,
          confirm_password,
          is_active: false,
          created_by,
        }),
      });

      const registerResponse: RegisterUserResponse = await response.json();

      if (registerResponse.code !== 200) {
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
    const { email, password } = requestData;
    const apiurl = userServiceApi.login;

    try {
      const response = await fetch(apiurl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const loginResponse: LoginUserResponse = await response.json();

      if (loginResponse.code !== 200) {
        throw new Error(loginResponse.message);
      }

      const userDTO: UserDTO = toUserDTO(loginResponse);

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

  static async update(request: UpdateUserRequest) {
    try {
      const {
        id,
        user_name,
        email,
        phone_number,
        description,
        profile_picture,
        bod,
      } = request;

      const response = await fetch(userServiceApi.update, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id,
          user_name,
          email,
          phone_number,
          description,
          profile_picture,
          bod,
        }),
      });

      const updateResponse = await response.json();

      if (updateResponse.code !== 200) {
        throw new Error(updateResponse.message);
      }

      return updateResponse;
    } catch (e) {
      console.error("Error updating user:", e);
      throw new Error("Failed to update user. Please try again.");
    }
  }
}
