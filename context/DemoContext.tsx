"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { useRouter } from "next/navigation";
import { hasFeature, requiredPlanLabel, type FeatureKey } from "@/lib/plans";
import {
  clearDemoSession,
  loadDemoSession,
  resetDemoData,
  saveDemoSession,
} from "@/lib/demo/storage";
import type { DemoData, DemoSession } from "@/lib/demo/types";
import { getSignupUrl, type PlanId } from "@/lib/site";

type UpgradeState = {
  open: boolean;
  feature: FeatureKey | null;
};

type DemoContextValue = {
  session: DemoSession | null;
  data: DemoData | null;
  plan: PlanId;
  ready: boolean;
  canAccess: (feature: FeatureKey) => boolean;
  requestFeature: (feature: FeatureKey) => boolean;
  upgradeModal: UpgradeState;
  closeUpgradeModal: () => void;
  resetDemo: () => void;
  exitToSignup: () => void;
  updateData: (updater: (data: DemoData) => DemoData) => void;
};

const DemoContext = createContext<DemoContextValue | null>(null);

export function DemoProvider({ children }: { children: ReactNode }) {
  const router = useRouter();
  const [session, setSession] = useState<DemoSession | null>(null);
  const [ready, setReady] = useState(false);
  const [upgradeModal, setUpgradeModal] = useState<UpgradeState>({
    open: false,
    feature: null,
  });

  useEffect(() => {
    setSession(loadDemoSession());
    setReady(true);
  }, []);

  const plan = session?.plan ?? "pro";

  const canAccess = useCallback(
    (feature: FeatureKey) => hasFeature(plan, feature),
    [plan]
  );

  const requestFeature = useCallback(
    (feature: FeatureKey) => {
      if (hasFeature(plan, feature)) return true;
      setUpgradeModal({ open: true, feature });
      return false;
    },
    [plan]
  );

  const closeUpgradeModal = useCallback(() => {
    setUpgradeModal({ open: false, feature: null });
  }, []);

  const resetDemo = useCallback(() => {
    if (!session) return;
    const fresh = resetDemoData(session.plan);
    setSession(fresh);
  }, [session]);

  const exitToSignup = useCallback(() => {
    const p = session?.plan ?? "pro";
    clearDemoSession();
    router.push(getSignupUrl(p));
  }, [session, router]);

  const updateData = useCallback(
    (updater: (data: DemoData) => DemoData) => {
      if (!session) return;
      const next: DemoSession = {
        ...session,
        data: updater(session.data),
      };
      saveDemoSession(next);
      setSession(next);
    },
    [session]
  );

  const value = useMemo<DemoContextValue>(
    () => ({
      session,
      data: session?.data ?? null,
      plan,
      ready,
      canAccess,
      requestFeature,
      upgradeModal,
      closeUpgradeModal,
      resetDemo,
      exitToSignup,
      updateData,
    }),
    [
      session,
      plan,
      ready,
      canAccess,
      requestFeature,
      upgradeModal,
      closeUpgradeModal,
      resetDemo,
      exitToSignup,
      updateData,
    ]
  );

  return (
    <DemoContext.Provider value={value}>{children}</DemoContext.Provider>
  );
}

export function useDemo() {
  const ctx = useContext(DemoContext);
  if (!ctx) throw new Error("useDemo must be used within DemoProvider");
  return ctx;
}

export function useUpgradeLabel(feature: FeatureKey | null) {
  if (!feature) return "";
  return requiredPlanLabel(feature);
}
