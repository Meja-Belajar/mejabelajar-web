import {
  getBookingByIdResponse,
  getBookingsByUserIdResponse,
} from "@src/models/responses/bookingReponse";
import { bookingServiceApi } from "../envConfig";
import { bookingDTO, toBookingDTO, toBookingsDTO } from "@src/models/dtos/bookingDTO";

import { BookingLists } from "@src/assets/data/userLandingData";

export class BookingService {
  static async getAllBookingsByUserId(userId: string): Promise<bookingDTO[]> {
    try {
      // const response = await fetch(`${bookingServiceApi.getAllBookings}/${userId}`);

      // const bookings: getBookingsByUserIdResponse = await response.json();

      // if (bookings.code !== 200) {
      //   throw new Error(bookings.message);
      // }

      // return toBookingsDTO(bookings);
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      return BookingLists;
    } catch (e) {
      console.error("Error fetching bookings:", e);
      throw new Error("Failed to fetch bookings");
    }
  }

  static async getBookingById(userId: string): Promise<bookingDTO> {
    try {
      const response = await fetch(`${bookingServiceApi.getBooking}/${userId}`);

      const booking: getBookingByIdResponse  = await response.json();

      if (booking.code !== 200) {
        throw new Error(booking.message);
      }

      return toBookingDTO(booking);
    } catch (e) {
      console.error("Error fetching booking:", e);
      throw new Error("Failed to fetch booking");
    }
  }
}

