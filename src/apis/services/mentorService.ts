import { mentorServiceApi } from "../envConfig";

import {
  MentorDTO,
  fromGetMentorByMentorId,
  fromGetMentorByUserId,
  fromGetPopularMentors,
  fromMentorApplication,
  fromUpdateMentor,
  toMentorsDTO,
} from "@src/models/dtos/mentorDTO";
import {
  GetMentorByMentorIdRequest,
  GetMentorByUserIdRequest,
  MentorApplicationRequest,
  UpdateMentorRequest,
} from "@src/models/requests/mentorRequest";
import { SearchRequest } from "@src/models/requests/searchRequest";
import {
  Example,
  GetAllMentorApplicationResponse,
  GetMentorByMentorIdResponse,
  GetMentorByUserIdResponse,
  GetMentorQueryResponse,
  GetPopularMentorsResponse,
  MentorApplicationResponse,
  UpdateMentorResponse,
} from "@src/models/responses/mentorResponse";

export class MentorService {
  static async getPopularMentors(): Promise<MentorDTO[]> {
    try {
      const response = await fetch(`${mentorServiceApi.getPopularMentors}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      });

      const mentors: GetPopularMentorsResponse = await response.json();

      if (mentors?.data?.length === 0) {
        throw new Error("No mentors found");
      }

      return fromGetPopularMentors(mentors);
    } catch (e) {
      console.error(`Error fetching mentors: ${e}`);
      throw new Error("Failed to fetch mentors");
    }
  }

  static async getAllMentors(): Promise<MentorDTO[]> {
    try {
      const response = await fetch(`${mentorServiceApi.getAllMentors}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      });

      const mentors: GetPopularMentorsResponse = await response.json();

      if (mentors.data.length === 0) {
        throw new Error("No mentors found");
      }

      return fromGetPopularMentors(mentors);
    } catch (e) {
      console.error(`Error fetching mentors: ${e}`);
      throw new Error("Failed to fetch mentors");
    }
  }

  static async getMentorByMentorId({
    mentor_id,
  }: GetMentorByMentorIdRequest): Promise<MentorDTO> {
    try {
      const response = await fetch(
        `${mentorServiceApi.getMentorByMentorId}/${mentor_id}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
        },
      );

      const mentor: GetMentorByMentorIdResponse = await response.json();

      if (mentor.code != 200) {
        throw new Error(mentor.message);
      }

      return fromGetMentorByMentorId(mentor);
    } catch (e) {
      console.error(`Error fetching mentor: ${e}`);
      throw new Error(`${e}`);
    }
  }

  static async getMentorByUserId({
    user_id,
  }: GetMentorByUserIdRequest): Promise<MentorDTO> {
    try {
      const response = await fetch(
        `${mentorServiceApi.getMentorByUserId}/${user_id}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
        },
      );

      const mentor: GetMentorByUserIdResponse = await response.json();

      if (mentor.code != 200) {
        throw new Error(mentor.message);
      }

      return fromGetMentorByUserId(mentor);
    } catch (e) {
      console.error(`Error fetching mentor: ${e}`);
      throw new Error(`${e}`);
    }
  }

  static async registerMentor(
    requestData: MentorApplicationRequest,
  ): Promise<MentorDTO> {
    try {
      const response = await fetch(`${mentorServiceApi.registerMentor}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(requestData),
      });

      const mentor: MentorApplicationResponse = await response.json();

      if (mentor.code != 201) {
        throw new Error("Failed to register mentor");
      }

      return fromUpdateMentor(mentor);
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

  static async updateMentor(
    requestData: UpdateMentorRequest,
  ): Promise<MentorDTO> {
    try {
      // const response = await fetch(`${mentorServiceApi.updateMentor}`, {
      //   method: "PUT",
      //   body: JSON.stringify(requestData),
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      // });

      const mentor: UpdateMentorResponse = Example.UpdateMentorResponse;

      if (mentor.code != 200) {
        throw new Error("Failed to update mentor");
      }

      return fromUpdateMentor(mentor);
    } catch (e) {
      console.error(`Error updating mentor: ${e}`);
      throw new Error("Failed to update mentor");
    }
  }

  static async getMentorByName(
    requestData: SearchRequest,
  ): Promise<MentorDTO[]> {
    try {
      // const response = await fetch(`${mentorServiceApi.getMentorByName}`, {
      //   method: "POST",
      //   body: JSON.stringify(requestData),
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      // });

      const mentor: GetMentorQueryResponse = Example.GetMentorQueryResponse;

      if (mentor.data.length === 0) {
        throw new Error("No mentors found");
      }

      return toMentorsDTO(mentor);
    } catch (e) {
      console.error(`Error fetching mentor: ${e}`);
      throw new Error("Failed to fetch mentor");
    }
  }
}
