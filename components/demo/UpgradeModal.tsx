"use client";

import { useDemo, useUpgradeLabel } from "@/context/DemoContext";
import { FEATURE_MIN_PLAN, PLAN_LABELS } from "@/lib/plans";
import { getDemoEnterUrl } from "@/lib/site";
import Link from "next/link";

export function UpgradeModal() {
  const { upgradeModal, closeUpgradeModal, plan } = useDemo();
  const requiredLabel = useUpgradeLabel(upgradeModal.feature);

  if (!upgradeModal.open || !upgradeModal.feature) return null;

  const requiredPlan = FEATURE_MIN_PLAN[upgradeModal.feature];
  const currentLabel = PLAN_LABELS[plan];

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/40 p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="upgrade-title"
      onClick={closeUpgradeModal}
    >
      <div
        className="w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <span className="inline-block rounded-full bg-brand-100 px-3 py-1 text-xs font-bold text-brand-700">
          שדרוג תוכנית
        </span>
        <h2 id="upgrade-title" className="mt-4 text-xl font-bold text-gray-900">
          הפיצ&apos;ר זמין ב-{requiredLabel}
        </h2>
        <p className="mt-2 text-gray-600">
          התוכנית הנוכחית שלך היא {currentLabel}. שדרגי כדי לפתוח את היכולת
          הזו.
        </p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row-reverse">
          <Link
            href={getDemoEnterUrl(requiredPlan)}
            className="flex-1 rounded-xl bg-gradient-to-l from-brand-500 to-purple-500 py-3 text-center font-bold text-white"
            onClick={closeUpgradeModal}
          >
            נסי {requiredLabel} בהדגמה
          </Link>
          <Link
            href={`/signup?plan=${requiredPlan}`}
            className="flex-1 rounded-xl border-2 border-brand-200 py-3 text-center font-bold text-brand-600 hover:bg-brand-50"
            onClick={closeUpgradeModal}
          >
            פתיחת חשבון אמיתי
          </Link>
        </div>
        <button
          type="button"
          onClick={closeUpgradeModal}
          className="mt-4 w-full text-sm text-gray-500 hover:text-gray-700"
        >
          המשיכי ב-{currentLabel}
        </button>
      </div>
    </div>
  );
}
