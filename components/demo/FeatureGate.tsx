"use client";

import { useDemo } from "@/context/DemoContext";
import { requiredPlanLabel, type FeatureKey } from "@/lib/plans";
import type { ReactNode } from "react";

export function FeatureGate({
  feature,
  children,
}: {
  feature: FeatureKey;
  children: ReactNode;
}) {
  const { canAccess, requestFeature } = useDemo();

  if (canAccess(feature)) return <>{children}</>;

  return (
    <div className="flex min-h-[50vh] flex-col items-center justify-center rounded-2xl border border-dashed border-gray-300 bg-gray-50 p-8 text-center">
      <span className="text-4xl" aria-hidden>
        🔒
      </span>
      <h2 className="mt-4 text-xl font-bold text-gray-900">
        הפיצ&apos;ר זמין ב-{requiredPlanLabel(feature)}
      </h2>
      <p className="mt-2 max-w-sm text-gray-600">
        שדרגי את התוכנית כדי לפתוח את היכולת הזו בהדגמה או בחשבון אמיתי.
      </p>
      <button
        type="button"
        onClick={() => requestFeature(feature)}
        className="mt-6 rounded-xl bg-gradient-to-l from-brand-500 to-purple-500 px-6 py-3 font-bold text-white"
      >
        לראות אפשרויות שדרוג
      </button>
    </div>
  );
}
