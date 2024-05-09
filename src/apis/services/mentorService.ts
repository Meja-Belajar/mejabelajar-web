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
      console.error(`Error fetching mentors: ${e}`);
      throw new Error("Failed to fetch mentors");
    }
  }

  static async getMentorById(userId: string): Promise<MentorDTO> {
    try {
      // const response = await fetch(`${mentorServiceApi.getMentor}${userId}`);
      
      // const mentor: MentorDTO = await response.json();

      // if (!mentor) {
      //   throw new Error("Mentor not found");
      // }

      // return mentor;

      await new Promise(resolve => setTimeout(resolve, 2000));

      return PopularMentors[0] as unknown as MentorDTO;
    } catch(e) {
      console.error(`Error fetching mentor: ${e}`);
      throw new Error(`Error: ${e}`);
    }
  
  }
}