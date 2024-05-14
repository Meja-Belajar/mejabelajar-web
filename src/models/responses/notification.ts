export interface GetNotificationByIdResponse {
  notification_id: string;
  title: string;
  description: string;
  created_at: string;
}

export class Example {
  static GetNotificationByIdResponse: GetNotificationByIdResponse = {
    notification_id: "093js-xsd9-3j2d-3j2d",
    title: "Request Information",
    description:
      "Congratulations! You have been accepted as a mentor. Please fill in the information needed to complete your profile.",
    created_at: "2021-08-01T00:00:00Z",
  };
}
