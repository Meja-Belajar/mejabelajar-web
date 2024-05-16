import { mentorServiceApi } from "../envConfig";

import {
  MentorDTO,
  toMentorDTO,
  toMentorsDTO,
} from "@src/models/dtos/mentorDTO";
import {
  GetMentorByIdRequest,
  MentorApplicationRequest,
} from "@src/models/requests/mentorRequest";
import {
  Example,
  GetAllMentorApplicationResponse,
  GetMentorByIdResponse,
  GetPopularMentorsResponse,
  MentorApplicationResponse,
} from "@src/models/responses/mentorResponse";

export class MentorService {
  static async getPopularMentors(): Promise<MentorDTO[]> {
    try {
      // const response = await fetch(`${mentorServiceApi.getPopularMentors}`);

      const mentors: GetPopularMentorsResponse =
        Example.GetPopularMentorsResponse;

      if (mentors.data.length === 0) {
        throw new Error("No mentors found");
      }

      return toMentorsDTO(mentors);
    } catch (e) {
      console.error(`Error fetching mentors: ${e}`);
      throw new Error("Failed to fetch mentors");
    }
  }

  static async getMentorById({
    mentor_id,
  }: GetMentorByIdRequest): Promise<MentorDTO> {
    try {
      // const response = await fetch(`${mentorServiceApi.getMentor}${mentor_id}`);

      const mentor: GetMentorByIdResponse = Example.GetMentorByIdResponse;

      if (mentor.code != 200) {
        throw new Error("Mentor not found");
      }

      return toMentorDTO(mentor);
    } catch (e) {
      console.error(`Error fetching mentor: ${e}`);
      throw new Error(`${e}`);
    }
  }

  static async registerMentor(
    requestData: MentorApplicationRequest,
  ): Promise<MentorDTO> {
    try {
      // const response = await fetch(`${mentorServiceApi.registerMentor}`, {
      //   method: "POST",
      //   body: JSON.stringify(requestData),
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      // });

      const mentor: MentorApplicationResponse =
        Example.MentorApplicationResponse;

      if (mentor.code != 201) {
        throw new Error("Failed to register mentor");
      }

      return toMentorDTO(mentor);
    } catch (e) {
      console.error(`Error registering mentor: ${e}`);
      throw new Error("Failed to register mentor");
    }
  }

  static async getMentorApplications(): Promise<MentorDTO[]> {
    try {
      // const response = await fetch(`${mentorServiceApi.registerMentor}`);

      const mentor: GetAllMentorApplicationResponse =
        Example.GetAllMentorApplicationResponse;

      if (mentor.code != 200) {
        throw new Error("Failed to register mentor");
      }

      return toMentorsDTO(mentor);
    } catch (e) {
      console.error(`Error fetching registered mentor: ${e}`);
      throw new Error("Failed to register mentor");
    }
  }
}
