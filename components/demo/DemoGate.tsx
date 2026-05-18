"use client";

import { useDemo } from "@/context/DemoContext";
import { useRouter } from "next/navigation";
import { useEffect, type ReactNode } from "react";

export function DemoGate({ children }: { children: ReactNode }) {
  const { session, ready } = useDemo();
  const router = useRouter();

  useEffect(() => {
    if (ready && !session) {
      router.replace("/");
    }
  }, [ready, session, router]);

  if (!ready) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gray-50">
        <p className="text-gray-500">טוען הדגמה...</p>
      </div>
    );
  }

  if (!session) return null;

  return <>{children}</>;
}
