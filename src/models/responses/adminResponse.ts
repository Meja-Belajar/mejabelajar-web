import { BaseResponse } from "./baseResponse";

export interface ValidateAdminResponse extends BaseResponse {
  data: {
    id: string;
    user_name: string;
    profile_picture?: string;
  };
}

export class Example {
  static ValidateAdminResponse: ValidateAdminResponse = {
    code: 200,
    message: "Success",
    data: {
      id: "1",
      user_name: "admin",
      profile_picture: "",
    },
  };
}
