import { GetNotificationByIdResponse } from "../responses/notification";

export interface NotificationDTO {
  notification_id: string;
  title: string;
  description: string;
  created_at: string;
}

export const toNotificationDTO = (
  data: GetNotificationByIdResponse,
): NotificationDTO[] => {
  return data?.data?.map((notification) => {
    return {
      notification_id: notification.notification_id,
      title: notification.title,
      description: notification.description,
      created_at: notification.created_at,
    };
  });
};
