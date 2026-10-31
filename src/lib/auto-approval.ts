import { type Status } from "./booking";

export interface LocalCustomer {
  id: string;
  full_name: string;
  whatsapp: string;
  email: string | null;
  dependents: string[];
  confirmed: boolean;
  cycle: string | null;
  created_at: string;
  last_activity_date: string | null;
  auto_approved?: boolean | undefined;
}

export interface LocalBooking {
  id: string;
  code: string;
  full_name: string;
  whatsapp: string;
  email: string | null;
  booking_date: string;
  slot_time: string;
  visit_type: string;
  category: string;
  cycle: string;
  format: string | null;
  customer_id: string;
  group_id: string;
  party_size: number;
  status: Status;
  created_at: string;
}

const SETTING_KEY = "mme_auto_approve_customers";
const CUSTOMERS_KEY = "mme_local_customers";
const BOOKINGS_KEY = "mme_local_bookings";

export function getAutoApproveSetting(): boolean {
  if (typeof window === "undefined") return true;
  const val = localStorage.getItem(SETTING_KEY);
  if (val === null) return true; // Ativado por padrão
  return val === "true";
}

export function setAutoApproveSetting(enabled: boolean): void {
  if (typeof window === "undefined") return;
  localStorage.setItem(SETTING_KEY, String(enabled));
}

export function getLocalCustomers(): LocalCustomer[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(CUSTOMERS_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function saveLocalCustomer(c: Omit<LocalCustomer, "id" | "created_at" | "last_activity_date"> & { id?: string }): LocalCustomer {
  const list = getLocalCustomers();
  const cleanPhone = c.whatsapp.replace(/\D/g, "");
  const existingIdx = list.findIndex((item) => item.whatsapp.replace(/\D/g, "") === cleanPhone);

  const now = new Date().toISOString();
  if (existingIdx >= 0) {
    const updated: LocalCustomer = {
      ...list[existingIdx]!,
      full_name: c.full_name,
      email: c.email ?? list[existingIdx]!.email,
      dependents: c.dependents,
      confirmed: c.confirmed ?? list[existingIdx]!.confirmed,
      cycle: c.cycle ?? list[existingIdx]!.cycle,
      auto_approved: c.auto_approved ?? list[existingIdx]!.auto_approved ?? false,
    };
    list[existingIdx] = updated;
    localStorage.setItem(CUSTOMERS_KEY, JSON.stringify(list));
    return updated;
  }

  const newCust: LocalCustomer = {
    id: c.id || "local-" + Math.random().toString(36).substring(2, 10),
    full_name: c.full_name,
    whatsapp: cleanPhone,
    email: c.email || null,
    dependents: c.dependents,
    confirmed: c.confirmed,
    cycle: c.cycle || "Iniciar",
    created_at: now,
    last_activity_date: null,
    auto_approved: c.auto_approved ?? false,
  };
  list.unshift(newCust);
  localStorage.setItem(CUSTOMERS_KEY, JSON.stringify(list));
  return newCust;
}

export function updateLocalCustomer(id: string, updates: Partial<LocalCustomer>): void {
  const list = getLocalCustomers();
  const idx = list.findIndex((item) => item.id === id);
  if (idx >= 0) {
    list[idx] = { ...list[idx]!, ...updates };
    localStorage.setItem(CUSTOMERS_KEY, JSON.stringify(list));
  }
}

export function deleteLocalCustomer(id: string): void {
  const list = getLocalCustomers().filter((item) => item.id !== id);
  localStorage.setItem(CUSTOMERS_KEY, JSON.stringify(list));
}

export function getLocalBookings(date?: string): LocalBooking[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(BOOKINGS_KEY);
    const list: LocalBooking[] = raw ? JSON.parse(raw) : [];
    if (date) {
      return list.filter((b) => b.booking_date === date);
    }
    return list;
  } catch {
    return [];
  }
}

export function genBookingCode(): string {
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  let code = "";
  for (let i = 0; i < 6; i++) {
    code += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return code;
}

export function createLocalBookings(params: {
  name: string;
  whatsapp: string;
  email: string;
  category: string;
  format: string;
  dates: string[];
  party: number;
}): { code: string; booking_date: string; cycle: string }[] {
  const cleanPhone = params.whatsapp.replace(/\D/g, "");
  const customer = saveLocalCustomer({
    full_name: params.name,
    whatsapp: cleanPhone,
    email: params.email || null,
    dependents: [],
    confirmed: true,
    cycle: params.category,
    auto_approved: true,
  });

  const allBookings = getLocalBookings();
  const groupId = "grp-" + Math.random().toString(36).substring(2, 9);
  const now = new Date().toISOString();

  let planCycles: string[] = [];
  let planDates: string[] = [];

  if (params.category === "Iniciar") {
    planCycles = ["i1", "i2", "i3"];
    if (params.format === "dia_inteiro") {
      planDates = [params.dates[0]!, params.dates[0]!, params.dates[0]!];
    } else if (params.format === "duas_tardes" || params.format === "tarde_integral") {
      planDates = [params.dates[0]!, params.dates[0]!, params.dates[1] || params.dates[0]!];
    } else {
      planDates = params.dates;
    }
  } else {
    planCycles = [params.category];
    planDates = [params.dates[0]!];
  }

  const results: { code: string; booking_date: string; cycle: string }[] = [];

  for (let i = 0; i < planCycles.length; i++) {
    const cycle = planCycles[i]!;
    const date = planDates[i] || planDates[0]!;
    const code = genBookingCode();

    const booking: LocalBooking = {
      id: "bkg-" + Math.random().toString(36).substring(2, 10),
      code,
      full_name: params.name,
      whatsapp: cleanPhone,
      email: params.email || null,
      booking_date: date,
      slot_time: "09:00:00",
      visit_type: params.category,
      category: params.category,
      cycle,
      format: params.format || null,
      customer_id: customer.id,
      group_id: groupId,
      party_size: params.party || 1,
      status: "agendado",
      created_at: now,
    };

    allBookings.push(booking);
    results.push({ code, booking_date: date, cycle });
  }

  if (typeof window !== "undefined") {
    localStorage.setItem(BOOKINGS_KEY, JSON.stringify(allBookings));
  }

  return results;
}

export function updateLocalBookingStatus(code: string, whatsapp: string, action: "chegou" | "cancelado" | "reagendou"): boolean {
  const cleanCode = code.trim().toUpperCase();
  const cleanPhone = whatsapp.replace(/\D/g, "");
  const list = getLocalBookings();
  let found = false;

  for (const b of list) {
    if (b.code.toUpperCase() === cleanCode && b.whatsapp.replace(/\D/g, "") === cleanPhone) {
      b.status = action;
      found = true;
    }
  }

  if (found && typeof window !== "undefined") {
    localStorage.setItem(BOOKINGS_KEY, JSON.stringify(list));
  }
  return found;
}

export function updateLocalBookingCycle(id: string, cycle: string, category: string): void {
  const list = getLocalBookings();
  const b = list.find((item) => item.id === id);
  if (b) {
    b.cycle = cycle;
    b.category = category;
    b.visit_type = category;
    if (typeof window !== "undefined") {
      localStorage.setItem(BOOKINGS_KEY, JSON.stringify(list));
    }
  }
}
