import { notificationServiceApi } from "../envConfig";

import {
  NotificationDTO,
  toNotificationDTO,
} from "@src/models/dtos/notificationDTO";
import { GetAllNotificationsByUserIdRequest } from "@src/models/requests/notificationRequest";
import { GetNotificationByIdResponse } from "@src/models/responses/notification";

export class NotificationService {
  static async getAllNotificationsByUserId({
    user_id,
  }: GetAllNotificationsByUserIdRequest): Promise<NotificationDTO[]> {
    try {
      const response = await fetch(
        `${notificationServiceApi.getAllNotificationsByUserId}/${user_id}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
        },
      );

      const notifications: GetNotificationByIdResponse = await response.json();

      if (notifications.data.length === 0) {
        throw new Error("No notifications found");
      }

      return toNotificationDTO(notifications);
    } catch (e) {
      if (e instanceof Error)
        console.error(`Error fetching notifications: ${e.name} - ${e.message}`);

      throw new Error("Failed to fetch notifications");
    }
  }
}
