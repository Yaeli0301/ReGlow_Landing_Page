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
