"use client";

import { PageHeader } from "@/components/app/PageHeader";
import { StatCard } from "@/components/app/StatCard";
import { FeatureGate } from "@/components/demo/FeatureGate";
import { useDemo } from "@/context/DemoContext";
import { formatCurrency } from "@/lib/demo/format";

export default function ReportsPage() {
  return (
    <FeatureGate feature="reports">
      <ReportsContent />
    </FeatureGate>
  );
}

function ReportsContent() {
  const { data } = useDemo();
  if (!data) return null;

  const returning = data.clients.filter((c) => !c.atRisk).length;
  const rate = Math.round((returning / data.clients.length) * 100);

  return (
    <>
      <PageHeader title="דוחות" subtitle="תובנות על הכנסה ולקוחות חוזרות" />
      <div className="grid gap-4 sm:grid-cols-3">
        <StatCard label="אחוז לקוחות חוזרות" value={`${rate}%`} accent="green" />
        <StatCard
          label="הודעות אוטומטיות"
          value={data.automations.reduce((s, a) => s + a.sentCount, 0)}
          accent="brand"
        />
        <StatCard
          label="הכנסה חודשית (דמו)"
          value={formatCurrency(
            data.payments.filter((p) => p.status === "paid").reduce((s, p) => s + p.amount, 0)
          )}
          accent="amber"
        />
      </div>
    </>
  );
}
