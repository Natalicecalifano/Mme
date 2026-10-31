import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { getLocalBookings } from "./auto-approval";

export function useDayBookings(date: string) {
  return useQuery({
    queryKey: ["bookings", date],
    queryFn: async () => {
      let remoteBookings: any[] = [];
      try {
        const { data } = await supabase.from("bookings").select("*").eq("booking_date", date).order("slot_time").order("created_at");
        if (data) remoteBookings = data;
      } catch {
        // Ignora erro se sessão offline
      }
      const local = getLocalBookings(date);
      const map = new Map<string, any>();
      remoteBookings.forEach((b) => map.set(b.id || b.code, b));
      local.forEach((b) => map.set(b.id || b.code, b));
      return Array.from(map.values());
    },
  });
}
