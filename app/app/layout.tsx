"use client";

import { getDemoEnterUrl } from "@/lib/site";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

/** All /app routes redirect to the full ReGlow product demo */
export default function AppLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  useEffect(() => {
    const plan =
      pathname.includes("premium") ? "premium" : pathname.includes("basic") ? "basic" : "pro";
    window.location.replace(getDemoEnterUrl(plan));
  }, [pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-brand-50">
      <p className="text-brand-700">מעבירים למערכת ReGlow המלאה...</p>
    </div>
  );
}
