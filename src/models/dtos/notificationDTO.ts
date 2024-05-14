import { GetNotificationByIdResponse } from "../responses/notification";

export interface NotificationDTO {
  notification_id: string;
  title: string;
  description: string;
  created_at: string;
}

export const toNotificationDTO = (data: GetNotificationByIdResponse): NotificationDTO => {
  return {
    notification_id: data.notification_id,
    title: data.title,
    description: data.description,
    created_at: data.created_at,
  };
};
