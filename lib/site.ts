export const PRIMARY_CTA = "התחילי עכשיו";
export const SECONDARY_CTA = "לראות איך זה עובד";

export type PlanId = "basic" | "pro" | "premium";

/** Full ReGlow app (demo deployment) — set to your Render URL in production */
export function getReglowAppUrl(): string {
  const url =
    process.env.NEXT_PUBLIC_REGLOW_APP_URL?.trim() ||
    "http://localhost:3000";
  return url.replace(/\/$/, "");
}

/** Opens the real ReGlow demo (dashboard, clients, appointments, etc.) */
export function getDemoEnterUrl(plan: PlanId = "pro"): string {
  return `${getReglowAppUrl()}/demo/start?plan=${plan}`;
}

/** Stripe Payment Links or Checkout URLs — set in .env.local */
export const CHECKOUT_URLS: Record<PlanId, string> = {
  basic:
    process.env.NEXT_PUBLIC_STRIPE_BASIC_URL ?? "/signup?plan=basic",
  pro: process.env.NEXT_PUBLIC_STRIPE_PRO_URL ?? "/signup?plan=pro",
  premium:
    process.env.NEXT_PUBLIC_STRIPE_PREMIUM_URL ?? "/signup?plan=premium",
};

export const DEFAULT_CHECKOUT = CHECKOUT_URLS.pro;

export const SUPPORT_EMAIL =
  process.env.NEXT_PUBLIC_SUPPORT_EMAIL ?? "support@reglow.app";

export const REAL_ACCOUNT_CTA = "פתיחת חשבון אמיתי";

export function getSignupUrl(plan: PlanId = "pro"): string {
  const checkout = CHECKOUT_URLS[plan];
  if (checkout.startsWith("http")) return checkout;
  return `${getReglowAppUrl()}/register?plan=${plan}`;
}
