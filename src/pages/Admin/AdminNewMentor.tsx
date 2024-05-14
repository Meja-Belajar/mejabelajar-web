import { Popover, Accordion, AccordionItem, Button } from "@nextui-org/react";
import { PopOverComponent } from "./AdminOverview";
import BookingLists from "@src/assets/data/BookingLists.json";

import "@src/assets/global.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faEnvelope, faRegistered, faSpinner, faWarning } from "@fortawesome/free-solid-svg-icons";
import { useFetch } from "@src/hooks/useFetch";
import { MentorService } from "@src/apis/services/mentorService";
import { MentorDTO } from "@src/models/dtos/mentorDTO";
import { useEffect, useState } from "react";
import { DateUtil } from "@src/utils/dateUtil";

const AdminNewMentor = () => {
  // const newMentor = useFetch<{}, MentorDTO>({
  //   fetchProps: {},
  //   fetchCallback: MentorService.getMentorApplications
  // })

  // if(newMentor.isLoading) return (
  //   <>        <div className="mt-20 flex items-center justify-center px-7">
  //   <FontAwesomeIcon icon={faSpinner} spin className="text-3xl" />
  // </div>
  //   </>
  // )

  const [newMentor, setNewMentor] = useState<MentorDTO[]>([]);
  const [isLoading, setLoading] = useState<boolean>(true);

  const fetchMentorApplications = async () => {
    try {
      setLoading(true);
      const response: MentorDTO[] = await MentorService.getMentorApplications();
      console.log(response);

      setNewMentor(response);
    } catch (e) {
      console.error("Error fetching mentor applications:", e)
    } finally {
      setLoading(false);
    }
  }

  const handleApprove = async () => {
  }

  const handleReject = async () => {
    
  }

  useEffect(() => {
    fetchMentorApplications();
  }, [])

  if (isLoading) return (
    <>
      <div className="mt-20 flex items-center justify-center px-7">
        <FontAwesomeIcon icon={faSpinner} spin className="text-3xl" />
      </div>
    </>
  )

  return (
    <>
      <Accordion>
        {newMentor.map((mentor) => (
          <AccordionItem
            key={mentor.mentor_id}
            title={mentor.mentor_id}
            startContent={<FontAwesomeIcon icon={faEnvelope} />}
          > 
<table className="w-full border-collapse bg-transparent">
            <tbody>
                <tr>
                    <td className="p-2 border-none">Username:</td>
                    <td className="p-2 border-none">{mentor.username}</td>
                </tr>
                <tr>
                    <td className="p-2 border-none">University:</td>
                    <td className="p-2 border-none">{mentor.university}</td>
                </tr>
                <tr>
                    <td className="p-2 border-none">Email:</td>
                    <td className="p-2 border-none">{mentor.email}</td>
                </tr>
                <tr>
                    <td className="p-2 border-none">Phone Number:</td>
                    <td className="p-2 border-none">{mentor.phone_number}</td>
                </tr>
                <tr>
                    <td className="p-2 border-none">Date of Birth:</td>
                    <td className="p-2 border-none">{DateUtil.toLocalString(DateUtil.fromISO(mentor.bod))}</td>
                </tr>
                <tr>
                    <td className="p-2 border-none">Description:</td>
                    <td className="p-2 border-none">{mentor.description}</td>
                </tr>
            </tbody>
        </table>
          <div className="p-2 mt-5 flex flex-row gap-5">
            <Button
              color="success"
              className="text-white"
              onClick={handleApprove}
            >
              Approve
            </Button>
            <Button
              color="danger"
              onClick={handleReject}
            >
              Reject
            </Button>

          </div>
          </AccordionItem>
        ))}
      </Accordion>
    </>
  );
};

export default AdminNewMentor;
