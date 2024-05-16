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

export interface UpdateBookingRequest {
  id: string;
  user_id: string;
  mentor_id: string;
  course_id: string;
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
  is_active: boolean;
}

export interface GetAllBookingsByMentorIdRequest {
  mentor_id: string;
}

export interface GetAllBookingsByUserIdRequest {
  user_id: string;
}

export interface GetBookingByIdRequest {
  id: string;
}

export interface DeleteBookingRequest {
  id: string;
}
