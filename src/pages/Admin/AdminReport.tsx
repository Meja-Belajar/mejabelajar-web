import { Popover, Accordion, AccordionItem } from "@nextui-org/react";
import { PopOverComponent } from "./AdminOverview";
import BookingLists from "@src/assets/data/BookingLists.json";

import "@src/assets/global.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faWarning
} from "@fortawesome/free-solid-svg-icons";

const ReportLists = [
  {
    "id": 1,
    "title": "New Report Booking",
    "description": "New booking from John Doe",
  },
  {
    "id": 2,
    "title": "Example Booking",
    "description": "Example booking from John Doe",
  }
];

const AdminReport = () => {
  
  return (
    <>
      <Accordion>
        {
          ReportLists.map((announcement) => (
            <AccordionItem 
              key={announcement.id} 
              title={announcement.title} 
              startContent={
                <FontAwesomeIcon icon={faWarning} />
              }
            >
              <p>{announcement.description}</p>
            </AccordionItem>
          ))
        }
      </Accordion>
  </>
  );
};

export default AdminReport;
