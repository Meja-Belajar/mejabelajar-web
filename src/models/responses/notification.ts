import { BaseResponse } from "./baseResponse";

export interface GetNotificationByIdResponse extends BaseResponse {
  data: {
    notification_id: string;
    title: string;
    description: string;
    created_at: string;
  }[];
}

export class Example {
  static GetNotificationByIdResponse: GetNotificationByIdResponse = {
    code: 200,
    message: "Success",
    data: [
      {
        notification_id: "1",
        title: "New Notification",
        description: "You have a new notification",
        created_at: "2021-10-10T10:00:00",
      },
      {
        notification_id: "2",
        title: "New Notification",
        description: "You have a new notification",
        created_at: "2021-10-10T10:00:00",
      },
    ],
  };
}
