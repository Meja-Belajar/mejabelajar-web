import { Popover, Accordion, AccordionItem, Button } from "@nextui-org/react";
import { PopOverComponent } from "./AdminOverview";
import BookingLists from "@src/assets/data/BookingLists.json";

import "@src/assets/global.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faEnvelope,
  faRegistered,
  faSpinner,
  faWarning,
} from "@fortawesome/free-solid-svg-icons";
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
      console.error("Error fetching mentor applications:", e);
    } finally {
      setLoading(false);
    }
  };

  const handleApprove = async () => {};

  const handleReject = async () => {};

  useEffect(() => {
    fetchMentorApplications();
  }, []);

  if (isLoading)
    return (
      <>
        <div className="mt-20 flex items-center justify-center px-7">
          <FontAwesomeIcon icon={faSpinner} spin className="text-3xl" />
        </div>
      </>
    );

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
                  <td className="border-none p-2">Username:</td>
                  <td className="border-none p-2">{mentor.username}</td>
                </tr>
                <tr>
                  <td className="border-none p-2">University:</td>
                  <td className="border-none p-2">{mentor.university}</td>
                </tr>
                <tr>
                  <td className="border-none p-2">Email:</td>
                  <td className="border-none p-2">{mentor.email}</td>
                </tr>
                <tr>
                  <td className="border-none p-2">Phone Number:</td>
                  <td className="border-none p-2">{mentor.phone_number}</td>
                </tr>
                <tr>
                  <td className="border-none p-2">Date of Birth:</td>
                  <td className="border-none p-2">
                    {DateUtil.toLocalString(DateUtil.fromISO(mentor.bod))}
                  </td>
                </tr>
                <tr>
                  <td className="border-none p-2">Description:</td>
                  <td className="border-none p-2">{mentor.description}</td>
                </tr>
              </tbody>
            </table>
            <div className="mt-5 flex flex-row gap-5 p-2">
              <Button
                color="success"
                className="text-white"
                onClick={handleApprove}
              >
                Approve
              </Button>
              <Button color="danger" onClick={handleReject}>
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
