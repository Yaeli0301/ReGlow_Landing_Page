"use client";

import { useDemo } from "@/context/DemoContext";
import { PLAN_LABELS } from "@/lib/plans";
import { REAL_ACCOUNT_CTA } from "@/lib/site";
import Link from "next/link";

export function DemoTopBar() {
  const { plan, resetDemo, exitToSignup } = useDemo();

  return (
    <div className="sticky top-0 z-50 border-b border-amber-200 bg-amber-50/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-2 px-4 py-2.5">
        <div className="flex items-center gap-2">
          <span className="rounded-lg bg-amber-400 px-2.5 py-1 text-xs font-bold text-amber-950">
            מצב הדגמה
          </span>
          <span className="text-sm text-amber-900">
            תוכנית: <strong>{PLAN_LABELS[plan]}</strong>
          </span>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <button
            type="button"
            onClick={resetDemo}
            className="rounded-lg border border-amber-300 bg-white px-3 py-1.5 text-sm font-medium text-amber-900 hover:bg-amber-100"
          >
            איפוס הדגמה
          </button>
          <Link
            href={`/signup?plan=${plan}`}
            className="rounded-lg border border-brand-300 bg-white px-3 py-1.5 text-sm font-medium text-brand-700 hover:bg-brand-50"
          >
            שדרוג
          </Link>
          <button
            type="button"
            onClick={exitToSignup}
            className="rounded-lg bg-gradient-to-l from-brand-500 to-purple-500 px-4 py-1.5 text-sm font-bold text-white shadow-md"
          >
            {REAL_ACCOUNT_CTA}
          </button>
        </div>
      </div>
    </div>
  );
}
