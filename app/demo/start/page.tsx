import { redirect } from "next/navigation";
import { getDemoEnterUrl, getReglowAppUrl, type PlanId } from "@/lib/site";

function parsePlan(plan?: string): PlanId {
  return ["basic", "pro", "premium"].includes(plan ?? "") ? (plan as PlanId) : "pro";
}

type PageProps = {
  searchParams: Promise<{ plan?: string }>;
};

/** Server redirect — avoids client-side hang when demo URL was localhost in production builds. */
export default async function DemoStartPage({ searchParams }: PageProps) {
  const { plan: planParam } = await searchParams;
  const plan = parsePlan(planParam);
  const target = getDemoEnterUrl(plan);

  if (
    process.env.NODE_ENV === "production" &&
    !process.env.NEXT_PUBLIC_REGLOW_APP_URL?.trim() &&
    target.includes("localhost")
  ) {
    redirect(`${getReglowAppUrl()}/demo/start?plan=${plan}`);
  }

  redirect(target);
}
