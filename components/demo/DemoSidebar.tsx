"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useDemo } from "@/context/DemoContext";
import { APP_NAV } from "@/lib/demo/nav";
import { hasFeature, requiredPlanLabel, type FeatureKey } from "@/lib/plans";

export function DemoSidebar() {
  const pathname = usePathname();
  const { plan, requestFeature } = useDemo();

  const handleLocked = (e: React.MouseEvent, feature: FeatureKey) => {
    e.preventDefault();
    requestFeature(feature);
  };

  return (
    <aside className="hidden w-56 shrink-0 border-e border-gray-200 bg-white md:block">
      <nav className="flex flex-col gap-1 p-4">
        {APP_NAV.map((item) => {
          const locked =
            item.feature !== undefined && !hasFeature(plan, item.feature);
          const active =
            pathname === item.href ||
            (item.href !== "/app" && pathname.startsWith(item.href));

          if (locked) {
            return (
              <button
                key={item.href}
                type="button"
                onClick={(e) => handleLocked(e, item.feature!)}
                className="flex w-full items-center justify-between rounded-xl px-3 py-2.5 text-right text-sm text-gray-400 hover:bg-gray-50"
              >
                <span className="text-xs text-gray-400">
                  {item.feature && requiredPlanLabel(item.feature)}
                </span>
                <span className="flex items-center gap-2">
                  <span aria-hidden>{item.icon}</span>
                  {item.label}
                  <span aria-hidden>🔒</span>
                </span>
              </button>
            );
          }

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-2 rounded-xl px-3 py-2.5 text-sm font-medium transition-colors ${
                active
                  ? "bg-brand-50 text-brand-700"
                  : "text-gray-700 hover:bg-gray-50"
              }`}
            >
              <span aria-hidden>{item.icon}</span>
              {item.label}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
