"use client";

import { getDemoEnterUrl } from "@/lib/site";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [redirecting, setRedirecting] = useState(true);

  useEffect(() => {
    const plan = pathname.includes("premium")
      ? "premium"
      : pathname.includes("basic")
        ? "basic"
        : "pro";
    window.location.replace(getDemoEnterUrl(plan));
    setRedirecting(true);
  }, [pathname]);

  if (redirecting) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-brand-50">
        <p className="text-brand-700">מעבירים למערכת ReGlow המלאה...</p>
      </div>
    );
  }

  return <>{children}</>;
}
