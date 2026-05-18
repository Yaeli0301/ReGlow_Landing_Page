"use client";

import { getDemoEnterUrl, type PlanId } from "@/lib/site";
import { useSearchParams } from "next/navigation";
import { Suspense, useEffect } from "react";

function RedirectToReglowDemo() {
  const searchParams = useSearchParams();
  const planParam = searchParams.get("plan");
  const plan: PlanId = ["basic", "pro", "premium"].includes(planParam ?? "")
    ? (planParam as PlanId)
    : "pro";

  useEffect(() => {
    window.location.replace(getDemoEnterUrl(plan));
  }, [plan]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-3 bg-brand-50">
      <div className="h-10 w-10 animate-pulse rounded-full bg-brand-400" />
      <p className="font-medium text-brand-700">מעבירים למערכת ReGlow...</p>
    </div>
  );
}

export default function DemoEnterPage() {
  return (
    <Suspense
      fallback={
        <div className="flex min-h-screen items-center justify-center">
          טוען...
        </div>
      }
    >
      <RedirectToReglowDemo />
    </Suspense>
  );
}
