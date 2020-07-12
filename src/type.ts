export interface Booking {
  id: string;
  checkInAt: string;
  date: string;
  price: number;
  type: string;
  status: string;
  payments: Array<Payment>;
  projects: Array<{
    count: number;
    name: "string";
    _id: string;
    active?: boolean;
  }>;
}
export interface User {
  name: string;
  avatarUrl: string;
  openid: string;
  mobile: string;
  balacne: number;
  points: number;
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
}

export interface Store {
  id: string;
  name: string;
  checkInTimeOptions: Array<Array<string>>;
  projects: Array<{
    name: string;
    price: number;
  }>;
}
