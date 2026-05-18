"use client";

import { getDemoEnterUrl } from "@/lib/site";
import { useEffect } from "react";

/** Legacy mock app route — redirects to the real ReGlow demo */
export default function LegacyAppRedirect() {
  useEffect(() => {
    window.location.replace(getDemoEnterUrl("pro"));
  }, []);

  return (
    <div className="flex min-h-screen items-center justify-center bg-brand-50">
      <p className="text-brand-700">מעבירים למערכת ReGlow המלאה...</p>
    </div>
  );
}
