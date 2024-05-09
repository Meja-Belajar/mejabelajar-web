import { faBell } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Accordion, AccordionItem } from "@nextui-org/react";
import { motion } from "framer-motion";
const NotificationLists = [
  {
    id: 1,
    title: "New Booking",
    description: "New booking from John Doe",
  },
  {
    id: 2,
    title: "Example Booking",
    description: "Example booking from John Doe",
  },
];

const NotificationPage = () => {
  return (
    <>
      <main className="min-h-screen w-full py-1 md:w-2/3 lg:w-3/4">
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
      </main>
    </>
  );
};

export default NotificationPage;
