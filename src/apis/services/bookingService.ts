import {
  CreateBookingResponse,
  Example,
  GetAllBookings,
  GetBookingByIdResponse,
  GetBookingsByUserIdResponse,
} from "@src/models/responses/bookingReponse";
import { bookingServiceApi } from "../envConfig";
import {
  BookingDTO,
  toBookingDTO,
  toBookingsDTO,
} from "@src/models/dtos/bookingDTO";

import { CreateBookingRequest } from "@src/models/requests/bookingRequest";

export class BookingService {
  static async getAllBookingsByUserId(userId: string): Promise<BookingDTO[]> {
    try {
      // const response = await fetch(`${bookingServiceApi.getAllBookings}/${userId}`);

      const bookings: GetBookingsByUserIdResponse = Example.GetBookingsByUserIdResponse;

      if (bookings.data.length === 0) {
        throw new Error("No bookings found");
      }

      return toBookingsDTO(bookings);
    } catch (e) {
      console.error("Error fetching bookings:", e);
      throw new Error("Failed to fetch bookings");
    }
  }

  static async getBookingById(userId: string): Promise<BookingDTO> {
    try {
      // const response = await fetch(`${bookingServiceApi.getBooking}/${userId}`);

      const booking: GetBookingByIdResponse = Example.GetBookingByIdResponse;

      if (booking.code !== 200) {
        throw new Error(booking.message);
      }

      return toBookingDTO(booking);
    } catch (e) {
      console.error("Error fetching booking:", e);
      throw new Error("Failed to fetch booking");
    }
  }

  static async getAllBookings(): Promise<BookingDTO[]> {
    try {
      // const response = await fetch(bookingServiceApi.getAllBookings);

      const bookings: GetAllBookings = Example.GetAllBookings;

      if (bookings.data.length === 0) {
        throw new Error("No bookings found");
      }

      return toBookingsDTO(bookings);
    } catch (e) {
      console.error("Error fetching bookings:", e);
      throw new Error("Failed to fetch bookings");
    }
  }

  static async create(
    booking: CreateBookingRequest,
  ): Promise<BookingDTO> {
    try {
      // const response = await fetch(bookingServiceApi.createBooking, {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify(booking),
      // });

      const createdBooking: CreateBookingResponse = Example.CreateBookingResponse;

      if (createdBooking.code !== 201) {
        throw new Error(createdBooking.message);
      }

      return toBookingDTO(createdBooking);
    } catch (e) {
      console.error("Error creating booking:", e);
      throw new Error("Failed to create booking");
    }
  }
}
