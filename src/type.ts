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
    player: string;
    projects: Array<{
      count: number;
      name: "string";
      _id: string;
    }>;
  }>;
}
export interface User {
  id: string;
  name: string;
  avatarUrl: string;
  openid: string;
  mobile: string;
  balacne: number;
  points: number;
  store?: Store;
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
