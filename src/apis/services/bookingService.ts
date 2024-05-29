import { bookingServiceApi } from "../envConfig";

import {
  BookingDTO,
  toBookingDTO,
  toBookingsDTO,
} from "@src/models/dtos/bookingDTO";
import {
  CreateBookingRequest,
  DeleteBookingRequest,
  GetAllBookingsByMentorIdRequest,
  GetAllBookingsByUserIdRequest,
  GetBookingByIdRequest,
} from "@src/models/requests/bookingRequest";
import {
  CreateBookingResponse,
  DeleteBookingResponse,
  Example,
  GetAllBookings,
  GetBookingByIdResponse,
  GetBookingsByMentorIdResponse,
  GetBookingsByUserIdResponse,
} from "@src/models/responses/bookingReponse";

export class BookingService {
  static async getAllBookingsByUserId({
    user_id,
  }: GetAllBookingsByUserIdRequest): Promise<BookingDTO[]> {
    try {
      const response = await fetch(`${bookingServiceApi.getBookingsByUserId}/${user_id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      });

      const bookings: GetBookingsByUserIdResponse = await response.json();

      if (bookings.data.length === 0) {
        throw new Error("No bookings found");
      }

      return toBookingsDTO(bookings);
    } catch (e) {
      if (e instanceof Error) {
        console.error(`Error fetching bookings: ${e.name} - ${e.message}`);
      }

      throw new Error("Failed to fetch bookings");
    }
  }

  static async getAllBookingsByMentorId({
    mentor_id,
  }: GetAllBookingsByMentorIdRequest): Promise<BookingDTO[]> {
    try {
      const response = await fetch(`${bookingServiceApi.getBookingsByMentorId}/${mentor_id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      });

      const bookings: GetBookingsByMentorIdResponse = await response.json();

      if (bookings.data.length === 0) {
        throw new Error("No bookings found");
      }

      return toBookingsDTO(bookings);
    } catch (e) {
      if (e instanceof Error) {
        console.error(`Error fetching bookings: ${e.name} - ${e.message}`);
      }

      throw new Error("Failed to fetch bookings");
    }
  }

  static async getBookingById({
    id,
  }: GetBookingByIdRequest): Promise<BookingDTO> {
    try {
      const response = await fetch(`${bookingServiceApi.getBookingByBookingId}/${id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      });

      const booking: GetBookingByIdResponse = await response.json();

      if (booking.code !== 200) {
        throw new Error(booking.message);
      }

      return toBookingDTO(booking);
    } catch (e) {
      if (e instanceof Error) {
        console.error(`Error fetching booking: ${e.name} - ${e.message}`);
      }
      throw new Error("Failed to fetch booking");
    }
  }

  static async getAllBookings(): Promise<BookingDTO[]> {
    try {
      const response = await fetch(`${bookingServiceApi.getAllBookings}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      });

      const bookings: GetAllBookings = await response.json();

      if (bookings.data.length === 0) {
        throw new Error("No bookings found");
      }

      return toBookingsDTO(bookings);
    } catch (e) {
      if (e instanceof Error) {
        console.error(`Error fetching bookings: ${e.name} - ${e.message}`);
      }
      throw new Error("Failed to fetch bookings");
    }
  }

  static async create(booking: CreateBookingRequest): Promise<BookingDTO> {
    try {
      
      const response = await fetch(bookingServiceApi.createBooking, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(booking),
      });
      
      const createdBooking: CreateBookingResponse = await response.json();
      
      console.log(createdBooking);
      if (createdBooking.code !== 201) {
        throw new Error(createdBooking.message);
      }

      return toBookingDTO(createdBooking);
    } catch (e) {
      if (e instanceof Error) {
        console.error(`Error creating booking: ${e.name} - ${e.message}`);
      }
      throw new Error("Failed to create booking");
    }
  }

  static async delete({
    id,
  }: DeleteBookingRequest): Promise<DeleteBookingResponse> {
    try {
      const response = await fetch(`${bookingServiceApi.deleteBooking}/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      });

      const deletedBooking: DeleteBookingResponse = await response.json();

      return deletedBooking;
    } catch (e) {
      if (e instanceof Error) {
        console.error(`Error deleting booking: ${e.name} - ${e.message}`);
      }
      throw new Error("Failed to delete booking");
    }
  }
}
