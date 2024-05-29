import { mentorServiceApi } from "../envConfig";

import {
  MentorDTO,
  fromGetMentorByMentorId,
  fromGetMentorByUserId,
  fromRegisterMentor,
  fromUpdateMentor,
  toMentorsDTO,
} from "@src/models/dtos/mentorDTO";
import {
  GetMentorByMentorIdRequest,
  GetMentorByUserIdRequest,
  RegisterMentorRequest,
  UpdateMentorRequest,
} from "@src/models/requests/mentorRequest";
import { SearchRequest } from "@src/models/requests/searchRequest";
import {
  Example,
  GetAllRegisterMentorResponse,
  GetMentorByMentorIdResponse,
  GetMentorByUserIdResponse,
  GetMentorQueryResponse,
  GetPopularMentorsResponse,
  RegisterMentorResponse,
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

      return toMentorsDTO(mentors);
    } catch (e) {
      if (e instanceof Error) {
        console.error(`Error fetching mentors: ${e.name} - ${e.message}`);
      }
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
      return toMentorsDTO(mentors);
    } catch (e) {
      if (e instanceof Error) {
        console.error(`Error fetching mentors: ${e.name} - ${e.message}`);
      }
      throw new Error("Failed to fetch mentors");
    }
  }

  static async getMentorByMentorId({
    mentor_id,
  }: GetMentorByMentorIdRequest): Promise<MentorDTO> {
    try {
      const response = await fetch(`${mentorServiceApi.getMentorByMentorId}/${mentor_id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      });

      const mentor: GetMentorByMentorIdResponse = await response.json();

      if (mentor.code != 200) {
        throw new Error(mentor.message);
      }

      return fromGetMentorByMentorId(mentor);
    } catch (e) {
      if (e instanceof Error) {
        console.error(`Error fetching mentor: ${e.name} - ${e.message}`);
      }
      throw new Error(`${e}`);
    }
  }

  static async getMentorByUserId({
    user_id,
  }: GetMentorByUserIdRequest): Promise<MentorDTO> {
    try {
      const response = await fetch(`${mentorServiceApi.getMentorByUserId}/${user_id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      });

      const mentor: GetMentorByUserIdResponse = await response.json();

      if (mentor.code != 200) {
        throw new Error(mentor.message);
      }

      return fromGetMentorByUserId(mentor);
    } catch (e) {
      if (e instanceof Error) {
        console.error(`Error fetching mentor: ${e.name} - ${e.message}`);
      }
      throw new Error(`${e}`);
    }
  }

  static async registerMentor(
    requestData: RegisterMentorRequest,
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

      const mentor: RegisterMentorResponse = await response.json();
      console.log(mentor);
      if (mentor.code != 201) {
        throw new Error("Failed to register mentor");
      }

      return fromRegisterMentor(mentor);
    } catch (e) {
      if (e instanceof Error) {
        console.error(`Error registering mentor: ${e.name} - ${e.message}`);
      }
      throw new Error("Failed to register mentor");
    }
  }

  static async getAllMentorApplications(): Promise<MentorDTO[]> {
    try {
      const mentor: MentorDTO[] = await MentorService.getAllMentors();

      const filteredMentor = mentor.filter((mentor) => mentor.rating === 0);

      return filteredMentor;
    } catch (e) {
      if (e instanceof Error) {
        console.error(`Error registering mentor: ${e.name} - ${e.message}`);
      }

      throw new Error("Failed to register mentor");
    }
  }

  static async updateMentor(
    requestData: UpdateMentorRequest,
  ): Promise<MentorDTO> {
    try {

      const mentor: UpdateMentorResponse = Example.UpdateMentorResponse;

      if (mentor.code != 200) {
        throw new Error("Failed to update mentor");
      }

      return fromUpdateMentor(mentor);
    } catch (e) {
      if (e instanceof Error)
        console.error(`Error updating mentor: ${e.name} - ${e.message}`);
      throw new Error("Failed to update mentor");
    }
  }

  static async getMentorQuery(
    requestData: SearchRequest,
  ): Promise<MentorDTO[]> {
    try {
      const { query } = requestData;
      const response = await fetch(`${mentorServiceApi.search}/${query}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      });

      const mentor: GetMentorQueryResponse = await response.json();

      if (mentor.data.length === 0) {
        throw new Error("No mentors found");
      }

      return toMentorsDTO(mentor);
    } catch (e) {
      if (e instanceof Error)
        console.error(`Error fetching mentor: ${e.name} - ${e.message}`);
      throw new Error("Failed to fetch mentor");
    }
  }
}
