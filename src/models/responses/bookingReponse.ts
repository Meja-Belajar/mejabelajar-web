import { BaseResponse } from "./baseResponse";

export interface GetBookingsByUserIdResponse extends BaseResponse {
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
  }[];
}

export interface GetBookingByIdResponse extends BaseResponse {
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

export interface GetAllBookings extends BaseResponse {
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
  }[];
}

export interface CreateBookingResponse extends BaseResponse {
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

export interface UpdateBookingResponse extends BaseResponse {
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

export interface DeleteBookingResponse extends BaseResponse {}

export class Example {
  static GetBookingsByUserIdResponse: GetBookingsByUserIdResponse = {
    code: 200,
    message: "Success",
    data: [
      {
        id: "1",
        user: {
          id: "1",
          name: "John Doe",
        },
        mentor: {
          id: "1",
          name: "Mentor",
        },
        course: {
          id: "1",
          name: "Course",
          detail: "Course Detail",
        },
        invoice: {
          id: "1",
          payment_method: "Credit Card",
          payment_name: "John Doe",
          payment_status: "Success",
          payment_amount: 100,
          payment_fee: 10,
          payment_total: 110,
        },
        date: "2021-01-01",
        location: "Location",
      },
    ],
  };

  static GetBookingByIdResponse: GetBookingByIdResponse = {
    code: 200,
    message: "Success",
    data: {
      id: "1",
      user: {
        id: "1",
        name: "John Doe",
      },
      mentor: {
        id: "1",
        name: "Mentor",
      },
      course: {
        id: "1",
        name: "Course",
        detail: "Course Detail",
      },
      invoice: {
        id: "1",
        payment_method: "Credit Card",
        payment_name: "John Doe",
        payment_status: "Success",
        payment_amount: 100,
        payment_fee: 10,
        payment_total: 110,
      },
      date: "2021-01-01",
      location: "Location",
    },
  };

  static GetAllBookings: GetAllBookings = {
    code: 200,
    message: "Success",
    data: [
      {
        id: "1",
        user: {
          id: "1",
          name: "John Doe",
        },
        mentor: {
          id: "1",
          name: "Mentor",
        },
        course: {
          id: "1",
          name: "Course",
          detail: "Course Detail",
        },
        invoice: {
          id: "1",
          payment_method: "Credit Card",
          payment_name: "John Doe",
          payment_status: "Success",
          payment_amount: 100,
          payment_fee: 10,
          payment_total: 110,
        },
        date: "2021-01-01",
        location: "Location",
      },
    ],
  };

  static CreateBookingResponse: CreateBookingResponse = {
    code: 200,
    message: "Success",
    data: {
      id: "1",
      user: {
        id: "1",
        name: "John Doe",
      },
      mentor: {
        id: "1",
        name: "Mentor",
      },
      course: {
        id: "1",
        name: "Course",
        detail: "Course Detail",
      },
      invoice: {
        id: "1",
        payment_method: "Credit Card",
        payment_name: "John Doe",
        payment_status: "Success",
        payment_amount: 100,
        payment_fee: 10,
        payment_total: 110,
      },
      date: "2021-01-01",
      location: "Location",
    },
  };

  static UpdateBookingResponse: UpdateBookingResponse = {
    code: 200,
    message: "Success",
    data: {
      id: "1",
      user: {
        id: "1",
        name: "John Doe",
      },
      mentor: {
        id: "1",
        name: "Mentor",
      },
      course: {
        id: "1",
        name: "Course",
        detail: "Course Detail",
      },
      invoice: {
        id: "1",
        payment_method: "Credit Card",
        payment_name: "John Doe",
        payment_status: "Success",
        payment_amount: 100,
        payment_fee: 10,
        payment_total: 110,
      },
      date: "2021-01-01",
      location: "Location",
    },
  };

  static DeleteBookingResponse: DeleteBookingResponse = {
    code: 201,
    message: "Success",
  };
}
