export interface Booking {
  id: string;
  checkInAt: string;
  date: string;
  price: number;
  type: string;
  status: string;
  customer: {
    id: string;
    name: string;
  };
  payments: Array<Payment>;
  projects: Array<{
    count: number;
    name: "string";
    _id: string;
    active?: boolean;
  }>;
  tickets: Array<{
    code: string;
    player: User;
    _id: string;
    projects: Array<{
      count: number;
      name: "string";
      _id: string;
      active?: boolean;
    }>;
  }>;
}
export interface User {
  id: string;
  name: string;
  avatarUrl: string;
  openid: string;
  mobile: string;
  balance: number;
  points: number;
  store?: Store;
  role: string;
}

export interface Payment {
  id: string;
  amount: number;
  attach: string;
  customer: Partial<User>;
  gateway: string;
  gatewayData: Object;
  paid: boolean;
  store: string;
  title: string;
  valid: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface Store {
  id: string;
  name: string;
  checkInTimeOptions: {
    period: string;
    limit?: number;
    dayType?: "onDaysOnly" | "offDaysOnly";
  }[];
  projects: Array<{
    name: string;
    price: number;
    equipments: { num: string }[];
    promptMessage: string;
    waitingCourses?: number;
    firstWaitingCourseSequence?: number;
  }>;
  disableClientBooking?: boolean;
}

export interface Course {
  id: string;
  status: string;
  date: string;
  checkpoints: string[];
  players: Array<{
    avatarUrl: string;
    id: string;
    name: string;
  }>;
  scores: Score[];
  project: string;
  sequence: number;
  start: string;
  end: string;
  store: Store;
  updatedAt: string;
  createdAt: string;
}

export interface Score {
  id: string;
  result: string;
  bastLap: {
    _id: string;
    duration: number;
  };
  baseLapIn: 3;
  laps: Array<{
    _id: string;
    duration: number;
  }>;
  player: {
    avatarUrl: string;
    id: string;
    name: string;
  };
}
