"use client";

import { PageHeader } from "@/components/app/PageHeader";
import { FeatureGate } from "@/components/demo/FeatureGate";
import { useDemo } from "@/context/DemoContext";
import { hasFeature } from "@/lib/plans";

export default function AutomationsPage() {
  return (
    <FeatureGate feature="automations">
      <AutomationsContent />
    </FeatureGate>
  );
}

function AutomationsContent() {
  const { data, plan, updateData } = useDemo();
  if (!data) return null;

  const fullAccess = hasFeature(plan, "fullAutomations");

  return (
    <>
      <PageHeader
        title="אוטומציות"
        subtitle="המערכת מחזירה לקוחות בשבילך — אוטומטית"
      />
      <ul className="space-y-3">
        {data.automations.map((au, index) => {
          const locked = !fullAccess && index >= 3;
          return (
            <li
              key={au.id}
              className={`flex items-center justify-between rounded-xl border p-4 ${
                locked ? "border-gray-200 bg-gray-50 opacity-60" : "border-gray-200 bg-white shadow-sm"
              }`}
            >
              <div>
                <p className="font-bold text-gray-900">{au.name}</p>
                <p className="text-sm text-gray-500">
                  {au.sentCount} הודעות נשלחו
                </p>
              </div>
              <button
                type="button"
                disabled={locked}
                onClick={() => {
                  if (locked) return;
                  updateData((d) => ({
                    ...d,
                    automations: d.automations.map((x) =>
                      x.id === au.id ? { ...x, enabled: !x.enabled } : x
                    ),
                  }));
                }}
                className={`rounded-full px-3 py-1 text-sm font-bold ${
                  au.enabled && !locked
                    ? "bg-green-100 text-green-700"
                    : "bg-gray-100 text-gray-500"
                }`}
              >
                {locked ? "Premium" : au.enabled ? "פעיל" : "כבוי"}
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
}
