"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { APP_NAV } from "@/lib/demo/nav";
import { hasFeature } from "@/lib/plans";
import { useDemo } from "@/context/DemoContext";

const MOBILE_NAV = APP_NAV.filter((n) =>
  ["/app", "/app/clients", "/app/calendar", "/app/automations", "/app/payments"].includes(
    n.href
  )
);

export function DemoMobileNav() {
  const pathname = usePathname();
  const { plan, requestFeature } = useDemo();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40 flex border-t border-gray-200 bg-white md:hidden">
      {MOBILE_NAV.map((item) => {
        const locked =
          item.feature !== undefined && !hasFeature(plan, item.feature);
        const active = pathname === item.href;

        if (locked) {
          return (
            <button
              key={item.href}
              type="button"
              onClick={() => item.feature && requestFeature(item.feature)}
              className="flex flex-1 flex-col items-center gap-0.5 py-2 text-[10px] text-gray-400"
            >
              <span className="text-lg opacity-50">{item.icon}</span>
              {item.label}
            </button>
          );
        }

        return (
          <Link
            key={item.href}
            href={item.href}
            className={`flex flex-1 flex-col items-center gap-0.5 py-2 text-[10px] ${
              active ? "font-bold text-brand-600" : "text-gray-600"
            }`}
          >
            <span className="text-lg">{item.icon}</span>
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}
