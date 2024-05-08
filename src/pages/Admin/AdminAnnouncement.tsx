import { Popover } from "@nextui-org/react";
import { PopOverComponent } from "./AdminOverview";
import BookingLists from "@src/assets/data/BookingLists.json";

import "@src/assets/global.css";

const AdminAnnouncement = () => {
  return (
    <>
      <div className="mb-10 mt-5 px-8">
        <h1 className="text-3xl">Annoucement</h1>
      </div>
      <div className="px-8">
        {BookingLists.map((index, booking) => (
          <PopOverComponent key={index} index={index} booking={booking} />
        ))}
      </div>
    </>
  );
};

export default AdminAnnouncement;
