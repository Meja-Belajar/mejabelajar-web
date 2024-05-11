export interface CreateBookingRequest {
  user_id: string;
  mentor_id: string;
  course_id: string;
  schedule: {
    from: string;
    to: string;
  };
  invoice: {
    payment_method: string;
    payment_name: string;
    payment_status: string;
    payment_amount: number;
  };
  location: string;
}
