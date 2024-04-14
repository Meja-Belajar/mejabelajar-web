import { Popover } from "@nextui-org/react";
import { PopOverComponent } from "./AdminOverview";
import BookingLists from '@assets/data/BookingLists.json';


const AdminAnnounce = () => {
  return (
    <>
      <div className="px-8 mt-5 mb-10">
        <h1 className="text-3xl">Annoucement</h1>

      </div>
      <div className="px-8">
        {
          BookingLists.map((index, booking) => (
            <PopOverComponent key={index} index={index} booking={booking}/>
          ))
        }

      </div>
    
    </>
  )
}

export default AdminAnnounce;