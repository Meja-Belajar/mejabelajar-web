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

export interface bookingsByUserIdResponse extends BaseResponse {
  data: {
    id: string;
    user: {
      id: string;
      name: string;
    };
    mentor: {
      id: string;
      name: string;
    };
    course: {
      id: string;
      name: string;
      detail: string;
    };
    invoice: {
      id: string;
      payment_method: string;
      payment_name: string;
      payment_status: string;
      payment_amount: number;
      payment_fee: number;
      payment_total: number;
    };
    date: string;
    location: string;
  };
}
