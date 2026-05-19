export const PRIMARY_CTA = "להתחיל דמו חינם";
export const SECONDARY_CTA = "איך זה עובד";

export const DEMO_URL = "/demo/start?plan=pro";

export type PlanId = "basic" | "pro" | "premium";

/** Relative path on the landing site — redirects to the full ReGlow app demo */
export function getDemoStartPath(plan: PlanId = "pro"): string {
  return `/demo/start?plan=${plan}`;
}

/** Production demo app — override with NEXT_PUBLIC_REGLOW_APP_URL in Vercel. */
const PRODUCTION_REGLOW_APP_URL = "https://re-glow.vercel.app";

/** Full ReGlow app on Vercel — set NEXT_PUBLIC_REGLOW_APP_URL in .env.local */
export function getReglowAppUrl(): string {
  const configured = process.env.NEXT_PUBLIC_REGLOW_APP_URL?.trim();
  if (configured) return configured.replace(/\/$/, "");

  if (process.env.NODE_ENV === "production") {
    return PRODUCTION_REGLOW_APP_URL;
  }

  return "http://localhost:3001";
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
  process.env.NEXT_PUBLIC_SUPPORT_EMAIL ?? "sorskyt5@gmail.com";

export const REAL_ACCOUNT_CTA = "פתיחת חשבון אמיתי";

export const FOOTER_SIGNUP_HEADLINE = "יאללה, השתכנעתי — בא לי להרוויח יותר 💰";
export const FOOTER_SIGNUP_CTA = "קדימה לפתיחת חשבון →";

export function getSignupUrl(plan: PlanId = "pro"): string {
  const checkout = CHECKOUT_URLS[plan];
  if (checkout.startsWith("http")) return checkout;
  return `${getReglowAppUrl()}/register?plan=${plan}`;
}
