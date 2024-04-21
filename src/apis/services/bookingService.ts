import { getAllBookingsResponse, getBookingResponse } from "@src/models/responses/bookingReponse";
import { bookingServiceApi } from "../envConfig"

export const getAllBookings = async (page: number) => {
  const apiUrl = bookingServiceApi.getAllBookings;

  try {
    const response = await fetch(`${apiUrl}?page=${page}`);

    const bookings = await response.json();

    if (bookings.code !== 200) {
      throw new Error(bookings.message);
    }

    return bookings as getAllBookingsResponse;
  } catch(e) {
    console.error('Error fetching bookings:', e);
    throw new Error('Failed to fetch bookings');
  }

}

export const getBooking = async (query: string) => {
  const apiUrl = bookingServiceApi.getBooking;

  try {
    const response = await fetch(`${apiUrl}/${query}`);

    const booking = await response.json();

    if(booking.code !== 200) {
      throw new Error(booking.message);
    }

    return booking as getBookingResponse;
  } catch(e) {
    console.error('Error fetching booking:', e);
    throw new Error('Failed to fetch booking');
  }
}

