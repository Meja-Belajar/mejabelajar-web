import {
  Example,
  GetAllMentorApplicationResponse,
  GetMentorByIdResponse,
  GetPopularMentorsResponse,
  RegisterMentorResponse,
} from "@src/models/responses/mentorResponse";
import { mentorServiceApi } from "../envConfig";
import {
  MentorDTO,
  toMentorsDTO,
  toMentorDTO,
} from "@src/models/dtos/mentorDTO";

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
  }: {
    mentor_id: String;
  }): Promise<MentorDTO> {
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

  static async registerMentor({
    username,
    university,
    email,
    phone_number,
    description,
    profile_picture,
    bod,
  }: {
    username: string;
    university: string;
    email: string;
    phone_number: string;
    description?: string;
    profile_picture?: string;
    bod: string;
  }): Promise<MentorDTO> {
    try {
      // const response = await fetch(`${mentorServiceApi.registerMentor}`, {
      //   method: "POST",
      //   body: JSON.stringify({
      //     username,
      //     university,
      //     email,
      //     phone_number,
      //     description,
      //     profile_picture,
      //     bod,
      //   }),
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      // });

      const mentor: RegisterMentorResponse = Example.RegisterMentorResponse;

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
