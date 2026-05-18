import type { PlanId } from "../site";
import { createSeedData } from "./seed";
import type { DemoSession } from "./types";

const STORAGE_KEY = "reglow_demo_session";

export function createDemoSession(plan: PlanId): DemoSession {
  return {
    isDemo: true,
    plan,
    data: createSeedData(),
    createdAt: new Date().toISOString(),
  };
}

export function loadDemoSession(): DemoSession | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as DemoSession;
    if (!parsed.isDemo || !parsed.plan || !parsed.data) return null;
    return parsed;
  } catch {
    return null;
  }
}

export function saveDemoSession(session: DemoSession): void {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(session));
}

export function clearDemoSession(): void {
  localStorage.removeItem(STORAGE_KEY);
}

export function resetDemoData(plan: PlanId): DemoSession {
  const session = createDemoSession(plan);
  saveDemoSession(session);
  return session;
}
