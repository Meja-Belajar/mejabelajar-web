import { BaseResponse } from "./baseResponse";

export interface getAllBookingsResponse extends BaseResponse {
  bookings: {
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
  }[];
}

export interface getBookingResponse extends BaseResponse {
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
