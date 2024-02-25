export interface User {
  userid: string;
  name: string;
  age: number;
  email: string;
  linkedin: string;
  description: string;
  course: string[];
  available: boolean;
  teach_history: {
    course: string;
    duration: string;
  }[];
  account_type: string;
}

export interface Live {
  thumbnail: string;
  startTime: string;
  expired: boolean;
  name: string;
  title: string;
  userId: string;
  totalWatchers: number;
}