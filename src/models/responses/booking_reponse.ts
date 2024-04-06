import { BaseResponse } from "./base_response";

export interface BookingResponse extends BaseResponse {
  booking: {
    id: string;
    userId: string;
    mentorId: string;
    courseId: string;
    invoiceId: string;
    date: string;
    location: string;
    isActive: boolean;
    createdBy: string;
    updatedBy: string;
    createdAt: string;
    updatedAt: string;
  };  
}
