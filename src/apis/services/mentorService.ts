import { getPopularMentorsResponse } from "@src/models/responses/mentorResponse";
import { mentorServiceApi } from "../envConfig";
import { MentorDTO } from "@src/models/dtos/mentorDTO";
import { PopularMentors } from "@src/assets/data/userLandingData";

export class MentorService {
  static async getPopularMentors(): Promise<MentorDTO[]> {
    try {
      // const response = await fetch(`${mentorServiceApi.getPopularMentors}`);
      
      // const mentors: MentorDTO[] = await response.json();

      // if (mentors.length === 0) {
      //   throw new Error("No mentors found");
      // }

      // return mentors;

      await new Promise(resolve => setTimeout(resolve, 2000));

      return PopularMentors as unknown as MentorDTO[];

    } catch (e) {
      console.error("Error fetching mentors:", e);
      throw new Error("Failed to fetch mentors");
    }
  }
}