import { faBell } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Accordion, AccordionItem } from "@nextui-org/react";
import { animate, exit, initial } from "@src/assets/pageTransition";
import { motion } from "framer-motion";
const NotificationLists = [
  {
    id: 1,
    title: "Session Reminder",
    description:
      "Your session will start in 30 minutes, please be ready to join",
  },
  {
    id: 2,
    title: "Payment Reminder",
    description:
      "Your payment will be due in 3 days, please make sure to pay on time",
  },
];

const NotificationPage = () => {
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
            <Accordion>
              {NotificationLists.map((notif) => (
                <AccordionItem
                  key={notif.id}
                  title={notif.title}
                  startContent={<FontAwesomeIcon icon={faBell} />}
                >
                  <p>{notif.description}</p>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </motion.main>
    </>
  );
};

export default NotificationPage;
