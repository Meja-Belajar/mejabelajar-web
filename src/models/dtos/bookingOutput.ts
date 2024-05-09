import { bookingsByUserIdResponse } from "../responses/bookingReponse";

export interface bookingsByUserIdDTO {
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
}

export const toBookingsByUserIdDTO = (
  data: bookingsByUserIdResponse,
): bookingsByUserIdDTO => ({
  id: data.data.id,
  user: {
    id: data.data.user.id,
    name: data.data.user.name,
  },
  mentor: {
    id: data.data.mentor.id,
    name: data.data.mentor.name,
  },
  course: {
    id: data.data.course.id,
    name: data.data.course.name,
    detail: data.data.course.detail,
  },
  invoice: {
    id: data.data.invoice.id,
    payment_method: data.data.invoice.payment_method,
    payment_name: data.data.invoice.payment_name,
    payment_status: data.data.invoice.payment_status,
    payment_amount: data.data.invoice.payment_amount,
    payment_fee: data.data.invoice.payment_fee,
    payment_total: data.data.invoice.payment_total,
  },
  date: data.data.date,
  location: data.data.location,
});

export interface bookingByIdDTO {
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
}
