import {
  CreateBookingResponse,
  GetBookingByIdResponse,
  GetBookingsByMentorIdResponse,
  GetBookingsByUserIdResponse,
  UpdateBookingResponse,
} from "../responses/bookingReponse";

/**
 * @description BookingDTO is a data transfer object that represents the data of a booking.
 */
export interface BookingDTO {
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

export const toBookingsDTO = (
  data: GetBookingsByUserIdResponse | GetBookingsByMentorIdResponse,
): BookingDTO[] => {
  return data.data.map((booking) => ({
    id: booking.id,
    user: {
      id: booking.user.id,
      name: booking.user.name,
    },
    mentor: {
      id: booking.mentor.id,
      name: booking.mentor.name,
    },
    course: {
      id: booking.course.id,
      name: booking.course.name,
      detail: booking.course.detail,
    },
    invoice: {
      id: booking.invoice.id,
      payment_method: booking.invoice.payment_method,
      payment_name: booking.invoice.payment_name,
      payment_status: booking.invoice.payment_status,
      payment_amount: booking.invoice.payment_amount,
      payment_fee: booking.invoice.payment_fee,
      payment_total: booking.invoice.payment_total,
    },
    date: booking.date,
    location: booking.location,
  }));
};

export const toBookingDTO = (
  data: GetBookingByIdResponse | CreateBookingResponse | UpdateBookingResponse,
): BookingDTO => {
  return {
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
  };
};
