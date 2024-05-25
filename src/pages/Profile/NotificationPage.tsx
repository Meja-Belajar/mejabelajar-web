import { useSelector } from "react-redux";

import { faBell, faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Accordion, AccordionItem } from "@nextui-org/react";
import { useFetch } from "@src/hooks";
import { motion } from "framer-motion";
import parser from "html-react-parser";

import { NotificationService } from "@src/apis/services/notificationService";

import { NotificationDTO } from "@src/models/dtos/notificationDTO";
import { GetAllNotificationsByUserIdRequest } from "@src/models/requests/notificationRequest";
import { GetNotificationByIdResponse } from "@src/models/responses/notification";

import { DateUtil } from "@src/utils/dateUtil";

import { animate, exit, initial } from "@src/assets/pageTransitions";

const NotificationPage = () => {
  const currentUser = useSelector((state: any) => state.user.currentUser);

  const notification = useFetch<
    GetAllNotificationsByUserIdRequest,
    NotificationDTO[]
  >({
    fetchProps: { user_id: currentUser?.user_id },
    fetchCallback: NotificationService.getAllNotificationsByUserId,
  });

  const renderNotification = () => {
    if (notification.isLoading || notification.error) {
      return (
        <div>
          <FontAwesomeIcon
            icon={faSpinner}
            spin
            style={{
              color: notification.error ? "red" : "black",
            }}
          />
          {notification.error && (
            <p className="text-red-500">{notification.error}</p>
          )}
        </div>
      );
    }

    return (
      <Accordion>
        {notification.data?.map((notification) => (
          <AccordionItem
            key={notification.notification_id}
            title={notification.title}
          >
            <p className="text-sm font-bold">
              {DateUtil.toLocalString(
                DateUtil.fromISO(notification.created_at),
              )}
            </p>
            <br />
            <p>{parser(notification.description)}</p>
          </AccordionItem>
        )) || []}
      </Accordion>
    );
  };
  return (
    <>
      <motion.main
        initial={initial}
        animate={animate}
        exit={exit}
        className="min-h-screen w-full py-1 md:w-2/3 lg:w-3/4"
      >
        <div className="p-2 md:p-4">
          <div className="mt-8 w-full px-6 pb-8 sm:max-w-xl sm:rounded-lg">
            <div className="mb-10 mt-10">
              <h1 className="open-sans-600 text-3xl">Notifications</h1>
            </div>

            {renderNotification()}
          </div>
        </div>
      </motion.main>
    </>
  );
};

export default NotificationPage;
