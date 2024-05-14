export interface BaseResponse {
  code: number;
  message: string;
}

export class Example {
  static BaseResponse: BaseResponse = {
    code: 200,
    message: "Success",
  };
}