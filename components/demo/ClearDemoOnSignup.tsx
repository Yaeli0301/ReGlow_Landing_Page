"use client";

import { clearDemoSession } from "@/lib/demo/storage";
import { useEffect } from "react";

/** Exits demo mode when user proceeds to real signup */
export function ClearDemoOnSignup() {
  useEffect(() => {
    clearDemoSession();
  }, []);
  return null;
}
