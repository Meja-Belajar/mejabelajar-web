import { BaseResponse } from "./baseResponse";

export interface getBookingsByUserIdResponse extends BaseResponse {
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

export interface getBookingByIdResponse extends BaseResponse {
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
