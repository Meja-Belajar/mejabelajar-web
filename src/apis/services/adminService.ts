import { adminServiceApi } from "../envConfig";

import { AdminDTO, toAdminDTO } from "@src/models/dtos/adminDTO";
import { MentorDTO, fromRegisterMentor } from "@src/models/dtos/mentorDTO";
import {
  Example,
  ValidateAdminResponse,
} from "@src/models/responses/adminResponse";
import {
  Example as ExampleMentor,
  RegisterMentorResponse,
} from "@src/models/responses/mentorResponse";

export class AdminService {
  static async verify({ id }: { id: string }): Promise<AdminDTO> {
    try {
      const admin: ValidateAdminResponse = Example.ValidateAdminResponse;

      if (admin.code !== 200) {
        throw new Error("Admin not found");
      }

      return toAdminDTO(admin);
    } catch (e) {
      if (e instanceof Error) {
        console.error(`Error verifying admin: ${e.name} - ${e.message}`);
      }
      throw new Error("Failed to verify admin");
    }
  }

  static async approveMentor({
    mentor_id,
  }: {
    mentor_id: string;
  }): Promise<MentorDTO> {
    try {
      const mentor: RegisterMentorResponse =
        ExampleMentor.RegisterMentorResponse;

      return fromRegisterMentor(mentor);
    } catch (e) {
      if (e instanceof Error) {
        console.error(`Error approving mentor: ${e.name} - ${e.message}`);
      }
      throw new Error("Failed to approve mentor");
    }
  }

  static async rejectMentor({
    mentor_id,
  }: {
    mentor_id: string;
  }): Promise<MentorDTO> {
    try {
      const mentor: RegisterMentorResponse =
        ExampleMentor.RegisterMentorResponse;

      return fromRegisterMentor(mentor);
    } catch (e) {
      if (e instanceof Error) {
        console.error(`Error rejecting mentor: ${e.name} - ${e.message}`);
      }
      throw new Error("Failed to reject mentor");
    }
  }
}
