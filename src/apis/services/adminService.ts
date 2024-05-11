import { adminServiceApi } from "../envConfig";

export class AdminService {
  static async verify(id: string): Promise<boolean> {
    try {
      // const response = await fetch(adminServiceApi.verify, {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify({ id }),
      // });

      // const verifyResponse = await response.json();

      // if (verifyResponse.code !== 200) {
      //   throw new Error(verifyResponse.message);
      // }

      return true;
    } catch (e) {
      console.error("Error verifying admin:", e);

      return false;
    }
  }

  static async getAllBookings() {
    try {
      // const response = await fetch(adminServiceApi.getAllBookings);

      // const bookings = await response.json();

      // if (bookings.code !== 200) {
      //   throw new Error(bookings.message);
      // }

      const dummy = {
        code: 200,
        message: "Success: Fetched all bookings",
        data: [
          {
            code: 200,
            message: "Success: List of bookings has been retrieved",
            data: [
              {
                booking_id: 1,
                user: {
                  id: 1,
                  name: "It's Mentee",
                },
                mentor: {
                  id: 1,
                  name: "It's Mentor",
                },
                course: {
                  id: 1,
                  name: "Introduction to Programming",
                  detail: "Learn the basic of programming",
                },
                invoice: {
                  id: 1,
                  payment_method: "credit_card",
                  payment_name: "John Doe",
                  payment_status: "paid",
                  payment_amount: 1000000,
                  payment_fee: 10000,
                  payment_total: 1010000,
                },
                date: "2021-01-01T00:00:00.000Z",
                location:
                  "Bina Nusantara University, Campus Anggrek, Jakarta, Indonesia",
              },
              {
                id: 2,
                user_id: 1,
                mentor: {
                  id: 2,
                  name: "Jane Doe",
                },
                course: {
                  id: 2,
                  name: "Introduction to Design",
                  detail: "Learn the basic of design",
                },
                invoice: {
                  id: 2,
                  payment_method: "credit_card",
                  payment_name: "John Doe",
                  payment_status: "paid",
                  payment_amount: 1000000,
                  payment_fee: 10000,
                  payment_total: 1010000,
                },
                date: "2021-01-01T00:00:00.000Z",
                location:
                  "Bina Nusantara University, Campus Anggrek, Jakarta, Indonesia",
              },
            ],
          },
        ],
      };

      return dummy;
    } catch (e) {
      console.error("Error fetching bookings:", e);
      throw new Error("Failed to fetch bookings");
    }
  }
}
