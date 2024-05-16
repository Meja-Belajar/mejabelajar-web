import { BaseResponse } from "./baseResponse";

export interface GetPopularMentorsResponse extends BaseResponse {
  data: {
    user_name: string;
    university: string;
    email: string;
    phone_number: string;
    description?: string;
    profile_picture?: string;
    bod: string;

    mentor_id: string;
    revenue: number;
    rating: number;
    total_teaching_hours: number;
    teaching_frequency: number;

    courses: {
      course_id: string;
      name: string;
      detail: string;
      rating: number;
      hourly_rate: number;
      course_start_time: string;
      course_end_time: string;
    }[];

    reviews: {
      review_id: string;
      description: string;
    }[];
  }[];
}

export interface GetMentorQueryResponse extends BaseResponse {
  data: {
    user_name: string;
    university: string;
    email: string;
    phone_number: string;
    description?: string;
    profile_picture?: string;
    bod: string;

    mentor_id: string;
    revenue: number;
    rating: number;
    total_teaching_hours: number;
    teaching_frequency: number;

    courses: {
      course_id: string;
      name: string;
      detail: string;
      rating: number;
      hourly_rate: number;
      course_start_time: string;
      course_end_time: string;
    }[];
    reviews: {
      review_id: string;
      description: string;
    }[];
  }[];
}

export interface GetMentorByIdResponse extends BaseResponse {
  data: {
    user_name: string;
    university: string;
    email: string;
    phone_number: string;
    description?: string;
    profile_picture?: string;
    bod: string;

    mentor_id: string;
    revenue: number;
    rating: number;
    total_teaching_hours: number;
    teaching_frequency: number;

    courses: {
      course_id: string;
      name: string;
      detail: string;
      rating: number;
      hourly_rate: number;
      course_start_time: string;
      course_end_time: string;
    }[];
    reviews: {
      review_id: string;
      description: string;
    }[];
  };
}

export interface MentorApplicationResponse extends BaseResponse {
  data: {
    user_name: string;
    university: string;
    email: string;
    phone_number: string;
    description?: string;
    profile_picture?: string;
    bod: string;

    mentor_id: string;
    revenue: number;
    rating: number;
    total_teaching_hours: number;
    teaching_frequency: number;

    courses: {
      course_id: string;
      name: string;
      detail: string;
      rating: number;
      hourly_rate: number;
      course_start_time: string;
      course_end_time: string;
    }[];
    reviews: {
      review_id: string;
      description: string;
    }[];
  };
}

export interface GetAllMentorApplicationResponse extends BaseResponse {
  data: [
    {
      user_name: string;
      university: string;
      email: string;
      phone_number: string;
      description?: string;
      profile_picture?: string;
      bod: string;

      mentor_id: string;
      revenue: number;
      rating: number;
      total_teaching_hours: number;
      teaching_frequency: number;

      courses: {
        course_id: string;
        name: string;
        detail: string;
        rating: number;
        hourly_rate: number;
        course_start_time: string;
        course_end_time: string;
      }[];
      reviews: {
        review_id: string;
        description: string;
      }[];
    },
  ];
}

export class Example {
  static GetPopularMentorsResponse: GetPopularMentorsResponse = {
    code: 200,
    message: "Success",
    data: [
      {
        mentor_id: "1sdfs",
        user_name: "John Doe",
        university: "University of California, Berkeley",
        email: "john@mail.com",
        phone_number: "080-1234-5678",
        description:
          "I am a student at UC Berkeley. I am studying computer science and I am interested in machine learning and artificial intelligence.",
        profile_picture:
          "https://t4.ftcdn.net/jpg/03/59/58/91/360_F_359589186_JDLl8dIWoBNf1iqEkHxhUeeOulx0wOC5.jpg",
        bod: "2021-01-01T00:00:00.000Z",
        revenue: 121.2,
        rating: 4.5,
        total_teaching_hours: 10,
        teaching_frequency: 2,
        courses: [
          {
            course_id: "1",
            name: "Introduction to Machine Learning",
            detail:
              "This course is an introduction to machine learning. It covers the basic concepts of machine learning and its applications.",
            rating: 4.5,
            hourly_rate: 1000.1,
            course_start_time: "2021-01-01T00:00:00.000Z",
            course_end_time: "2021-01-01T00:00:00.000Z",
          },
          {
            course_id: "2",
            name: "Introduction to Artificial Intelligence",
            detail:
              "This course is an introduction to artificial intelligence. It covers the basic concepts of artificial intelligence and its applications.",
            rating: 4.5,
            hourly_rate: 1233.1,
            course_start_time: "2021-01-01T00:00:00.000Z",
            course_end_time: "2021-01-01T00:00:00.000Z",
          },
        ],
        reviews: [
          {
            review_id: "1",
            description:
              "John is a great mentor. He is very knowledgeable and helpful. I would recommend him to anyone who is interested in machine learning.",
          },
        ],
      },
    ],
  };

  static GetMentorQueryResponse: GetMentorQueryResponse = {
    code: 200,
    message: "Success",
    data: [
      {
        mentor_id: "1sdfs",
        user_name: "John Doe",
        university: "University of California, Berkeley",
        email: "john@mail.com",
        phone_number: "080-1234-5678",
        description:
          "I am a student at UC Berkeley. I am studying computer science and I am interested in machine learning and artificial intelligence.",
        profile_picture:
          "https://t4.ftcdn.net/jpg/03/59/58/91/360_F_359589186_JDLl8dIWoBNf1iqEkHxhUeeOulx0wOC5.jpg",
        bod: "2021-01-01T00:00:00.000Z",
        revenue: 121.2,
        rating: 4.5,
        total_teaching_hours: 10,
        teaching_frequency: 2,
        courses: [
          {
            course_id: "1",
            name: "Introduction to Machine Learning",
            detail:
              "This course is an introduction to machine learning. It covers the basic concepts of machine learning and its applications.",
            rating: 4.5,
            hourly_rate: 1000.1,
            course_start_time: "2021-01-01T00:00:00.000Z",
            course_end_time: "2021-01-01T00:00:00.000Z",
          },
          {
            course_id: "2",
            name: "Introduction to Artificial Intelligence",
            detail:
              "This course is an introduction to artificial intelligence. It covers the basic concepts of artificial intelligence and its applications.",
            rating: 4.5,
            hourly_rate: 1233.1,
            course_start_time: "2021-01-01T00:00:00.000Z",
            course_end_time: "2021-01-01T00:00:00.000Z",
          },
        ],
        reviews: [
          {
            review_id: "1",
            description:
              "John is a great mentor. He is very knowledgeable and helpful. I would recommend him to anyone who is interested in machine learning.",
          },
        ],
      },
    ],
  };

  static GetMentorByIdResponse: GetMentorByIdResponse = {
    code: 200,
    message: "Success",
    data: {
      user_name: "Rico Tandrio",
      university: "BINUS University",
      email: "ricotandrio@mejabelajar.edu",
      phone_number: "081234567890",
      description: "I am a Student",
      profile_picture: "",
      bod: "2000-01-01T00:00:00.000Z",

      mentor_id: "1",
      revenue: 12220,
      rating: 5,
      total_teaching_hours: 0,
      teaching_frequency: 0,

      courses: [
        {
          course_id: "1",
          name: "Math",
          detail: "Mathematics",
          rating: 5,
          hourly_rate: 50000,
          course_start_time: "2021-01-01T00:00:00.000Z",
          course_end_time: "2021-01-01T01:00:00.000Z",
        },
      ],
      reviews: [
        {
          review_id: "1",
          description: "Good Mentor",
        },
      ],
    },
  };

  static MentorApplicationResponse: MentorApplicationResponse = {
    code: 201,
    message: "Success",
    data: {
      user_name: "Rico Tandrio",
      university: "BINUS University",
      email: "ricotandrio@mejabelajar.edu",
      phone_number: "081234567890",
      description: "I am a Student",
      profile_picture: "",
      bod: "2000-01-01T00:00:00.000Z",

      mentor_id: "1",
      revenue: 0,
      rating: 5,
      total_teaching_hours: 0,
      teaching_frequency: 0,

      courses: [],
      reviews: [],
    },
  };

  static GetAllMentorApplicationResponse: GetAllMentorApplicationResponse = {
    code: 200,
    message: "Success",
    data: [
      {
        user_name: "Rico Tandrio",
        university: "BINUS University",
        email: "ricotandrio@mejabelajar.edu",
        phone_number: "081234567890",
        description: "I am a Student",
        profile_picture: "",
        bod: "2000-01-01T00:00:00.000Z",

        mentor_id: "1",
        revenue: 0,
        rating: 5,
        total_teaching_hours: 0,
        teaching_frequency: 0,

        courses: [
          {
            course_id: "1",
            name: "Math",
            detail: "Mathematics",
            rating: 5,
            hourly_rate: 50000,
            course_start_time: "2021-01-01T00:00:00.000Z",
            course_end_time: "2021-01-01T01:00:00.000Z",
          },
        ],
        reviews: [
          {
            review_id: "1",
            description: "Good Mentor",
          },
        ],
      },
    ],
  };
}
