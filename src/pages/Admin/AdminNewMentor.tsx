import { useEffect, useState } from "react";

import { PopOverComponent } from "./AdminOverview";
import {
  faBell,
  faEnvelope,
  faRegistered,
  faSpinner,
  faWarning,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Accordion, AccordionItem, Button, Popover } from "@nextui-org/react";

import { MentorService } from "@src/apis/services/mentorService";

import { useFetch } from "@src/hooks/useFetch";

import { MentorDTO } from "@src/models/dtos/mentorDTO";

import { DateUtil } from "@src/utils/dateUtil";

import "@src/assets/global.css";
import { UpdateMentorRequest, toUpdateMentorRequest } from "@src/models/requests/mentorRequest";
import { useSelector } from "react-redux";

const AdminNewMentor = () => {
  const newMentorsApp = useFetch<{}, MentorDTO[]>({
    fetchProps: {},
    fetchCallback: () => MentorService.getMentorApplications()
  })

  const [error, setError] = useState<string>("");

  const handleApprove = async (mentor: MentorDTO) => {
    try {
      // @ts-ignore
      const response = await MentorService.updateMentor(toUpdateMentorRequest(mentor));

      console.log(mentor);

    } catch (e) {
      if(e instanceof Error) setError(e.message);
    }
  };
  
  const handleReject = async (mentor: MentorDTO) => {
    try {
      const request = toUpdateMentorRequest(mentor);
      // @ts-ignore
      const response = await MentorService.updateMentor({
        ...request,
        is_active: false
      });

    } catch(e) {
      if(e instanceof Error) setError(e.message);
    }
  };

  if (newMentorsApp.isLoading) {
    return (
      <>
        <div className="mt-20 flex items-center justify-center px-7">
          <FontAwesomeIcon icon={faSpinner} spin className="text-3xl" />
        </div>
      </>
    );
  }

  return (
    <> 
      <div>
        {error && <p className="text-red-500">{`!!! ${error}`}</p>}
      </div>

      <Accordion>
        {newMentorsApp.data!.map((mentor) => (
          <AccordionItem
            key={mentor.mentor_id}
            title={`${mentor.mentor_id} - ${mentor.username}`}
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
                    {DateUtil.toBOD(DateUtil.fromISO(mentor.bod))}
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
                onClick={() => handleApprove(mentor)}
              >
                Approve
              </Button>
              <Button color="danger" onClick={() => handleReject(mentor)}>
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
