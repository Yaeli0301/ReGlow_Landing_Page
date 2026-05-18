import type { FeatureKey } from "../plans";

export type NavItem = {
  href: string;
  label: string;
  icon: string;
  feature?: FeatureKey;
};

export const APP_NAV: NavItem[] = [
  { href: "/app", label: "לוח בקרה", icon: "📊" },
  { href: "/app/clients", label: "לקוחות", icon: "👥" },
  { href: "/app/calendar", label: "יומן תורים", icon: "📅" },
  {
    href: "/app/automations",
    label: "אוטומציות",
    icon: "🔄",
    feature: "automations",
  },
  {
    href: "/app/whatsapp",
    label: "וואטסאפ",
    icon: "💬",
    feature: "whatsapp",
  },
  {
    href: "/app/booking",
    label: "דף הזמנות",
    icon: "🔗",
    feature: "bookingPage",
  },
  { href: "/app/payments", label: "תשלומים", icon: "💳" },
  {
    href: "/app/reports",
    label: "דוחות",
    icon: "📈",
    feature: "reports",
  },
];
