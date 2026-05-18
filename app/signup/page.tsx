import Link from "next/link";
import { ClearDemoOnSignup } from "@/components/demo/ClearDemoOnSignup";
import { CHECKOUT_URLS, PRIMARY_CTA, REAL_ACCOUNT_CTA, type PlanId } from "@/lib/site";
import { Button } from "@/components/ui/Button";

const planLabels: Record<PlanId, string> = {
  basic: "Basic — 99₪",
  pro: "Pro — 199₪",
  premium: "Premium — 299₪",
};

export default async function SignupPage({
  searchParams,
}: {
  searchParams: Promise<{ plan?: string }>;
}) {
  const { plan: planParam } = await searchParams;
  const plan = (
    ["basic", "pro", "premium"].includes(planParam ?? "") ? planParam : "pro"
  ) as PlanId;

  const checkoutUrl = CHECKOUT_URLS[plan];
  const isExternal = checkoutUrl.startsWith("http");

  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-5 py-16">
      <ClearDemoOnSignup />
      <div className="w-full max-w-md rounded-2xl border border-brand-100 bg-white p-8 shadow-xl text-center">
        <h1 className="text-2xl font-bold text-gray-900">{REAL_ACCOUNT_CTA}</h1>
        <p className="mt-2 text-gray-600">תוכנית נבחרת: {planLabels[plan]}</p>

        <Button
          href={checkoutUrl}
          external={isExternal}
          className="mt-8 w-full"
        >
          {PRIMARY_CTA}
        </Button>

        <p className="mt-4 text-sm text-gray-500">לא נדרש כרטיס אשראי לניסיון</p>

        <Link href="/" className="mt-6 inline-block text-sm text-brand-600 hover:underline">
          חזרה לדף הבית
        </Link>
      </div>
    </main>
  );
}
