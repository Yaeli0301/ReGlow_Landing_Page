import type { PlanId } from "../site";

export type AppointmentStatus = "confirmed" | "completed" | "cancelled" | "no-show";
export type PaymentStatus = "paid" | "pending" | "refunded";

export type Service = {
  id: string;
  name: string;
  durationMin: number;
  price: number;
};

export type Client = {
  id: string;
  name: string;
  phone: string;
  lastVisit: string;
  totalVisits: number;
  atRisk: boolean;
};

export type Appointment = {
  id: string;
  clientId: string;
  serviceId: string;
  start: string;
  status: AppointmentStatus;
};

export type Payment = {
  id: string;
  clientId: string;
  amount: number;
  status: PaymentStatus;
  date: string;
  serviceName: string;
};

export type Automation = {
  id: string;
  name: string;
  enabled: boolean;
  sentCount: number;
};

export type DemoData = {
  clients: Client[];
  services: Service[];
  appointments: Appointment[];
  payments: Payment[];
  automations: Automation[];
};

export type DemoSession = {
  isDemo: true;
  plan: PlanId;
  data: DemoData;
  createdAt: string;
};
