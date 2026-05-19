import type { PlanId } from "./site";

export type FeatureKey =
  | "automations"
  | "whatsapp"
  | "bookingPage"
  | "advancedCalendar"
  | "reports"
  | "fullAutomations";

export const PLAN_LABELS: Record<PlanId, string> = {
  basic: "Basic",
  pro: "Pro",
  premium: "Premium",
};

/** Minimum plan required per feature */
export const FEATURE_MIN_PLAN: Record<FeatureKey, PlanId> = {
  automations: "pro",
  whatsapp: "pro",
  advancedCalendar: "pro",
  reports: "pro",
  fullAutomations: "premium",
  bookingPage: "premium",
};

const PLAN_RANK: Record<PlanId, number> = {
  basic: 0,
  pro: 1,
  premium: 2,
};

export function planIncludes(current: PlanId, required: PlanId): boolean {
  return PLAN_RANK[current] >= PLAN_RANK[required];
}

export function hasFeature(plan: PlanId, feature: FeatureKey): boolean {
  return planIncludes(plan, FEATURE_MIN_PLAN[feature]);
}

export function requiredPlanLabel(feature: FeatureKey): string {
  return PLAN_LABELS[FEATURE_MIN_PLAN[feature]];
}

export type PricingPlan = {
  id: PlanId;
  price: number;
  tag?: string;
  popular?: boolean;
  features: string[];
  locked?: string[];
};

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: "basic",
    price: 99,
    features: ["ניהול לקוחות", "דשבורד בסיסי", "רשימת לקוחות וחיפוש"],
    locked: ["ללא יומן תורים", "ללא לקוחות אבודים", "ללא דף הזמנות"],
  },
  {
    id: "pro",
    price: 199,
    tag: "הכי פופולרי",
    popular: true,
    features: [
      "הכל ב-Basic",
      "יומן תורים שבועי וחודשי",
      "לקוחות שלא חזרו + WhatsApp",
      "אוטומציה ותזכורות",
    ],
    locked: ["ללא דף הזמנות אונליין"],
  },
  {
    id: "premium",
    price: 299,
    tag: "הכי מלא",
    features: [
      "הכל ב-Pro",
      "דף הזמנות אישי ללקוחות",
      "שיתוף קישור הזמנה",
      "אוטומציה מלאה",
    ],
  },
];

export function demoCtaLabel(plan: PlanId): string {
  return `נסי ${PLAN_LABELS[plan]} בחינם`;
}
