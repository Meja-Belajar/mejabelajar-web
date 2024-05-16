import { adminServiceApi } from "../envConfig";

import { AdminDTO, toAdminDTO } from "@src/models/dtos/adminDTO";
import { MentorDTO } from "@src/models/dtos/mentorDTO";
import {
  Example,
  ValidateAdminResponse,
} from "@src/models/responses/adminResponse";

export class AdminService {
  static async verify({ id }: { id: string }): Promise<AdminDTO> {
    try {
      // const response = await fetch(`${adminServiceApi.verifyAdmin}${id}`);

      const admin: ValidateAdminResponse = Example.ValidateAdminResponse;

      if (admin.code !== 200) {
        throw new Error("Admin not found");
      }

      return toAdminDTO(admin);
    } catch (e) {
      console.error("Error verifying admin:", e);
      throw new Error("Failed to verify admin");
    }
  }

  static async approveMentor({
    mentor_id,
  }: {
    mentor_id: string;
  }): Promise<MentorDTO> {}

  static async rejectMentor({
    mentor_id,
  }: {
    mentor_id: string;
  }): Promise<MentorDTO> {}
}
