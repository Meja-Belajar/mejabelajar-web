import { PopOverComponent } from "./AdminOverview";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Accordion, AccordionItem, Popover } from "@nextui-org/react";

import BookingLists from "@src/assets/data/BookingLists.json";
import "@src/assets/global.css";

const AnnoucementLists = [
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

const AdminAnnouncement = () => {
  return (
    <>
      <Accordion>
        {AnnoucementLists.map((announcement) => (
          <AccordionItem
            key={announcement.id}
            title={announcement.title}
            startContent={<FontAwesomeIcon icon={faBell} />}
          >
            <p>{announcement.description}</p>
          </AccordionItem>
        ))}
      </Accordion>
    </>
  );
};

export default AdminAnnouncement;
