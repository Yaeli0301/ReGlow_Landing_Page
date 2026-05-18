"use client";

import { PageHeader } from "@/components/app/PageHeader";
import { useDemo } from "@/context/DemoContext";
import { formatDate, STATUS_LABELS } from "@/lib/demo/format";

export default function CalendarPage() {
  const { data, canAccess } = useDemo();
  if (!data) return null;

  const clientMap = Object.fromEntries(data.clients.map((c) => [c.id, c]));
  const serviceMap = Object.fromEntries(data.services.map((s) => [s.id, s]));

  const sorted = [...data.appointments].sort(
    (a, b) => new Date(a.start).getTime() - new Date(b.start).getTime()
  );

  return (
    <>
      <PageHeader
        title="יומן תורים"
        subtitle={
          canAccess("advancedCalendar")
            ? "תצוגה מלאה עם סינון וחורים אוטומטיים"
            : "תצוגת יומן בסיסית — שדרגי ל-Pro לתצוגה מתקדמת"
        }
      />
      <ul className="space-y-3">
        {sorted.map((a) => (
          <li
            key={a.id}
            className="flex flex-wrap items-center justify-between gap-2 rounded-xl border border-gray-200 bg-white p-4 shadow-sm"
          >
            <div>
              <p className="font-bold text-gray-900">
                {clientMap[a.clientId]?.name}
              </p>
              <p className="text-sm text-gray-600">
                {serviceMap[a.serviceId]?.name}
              </p>
            </div>
            <div className="text-left">
              <p className="text-sm font-medium text-gray-800">
                {formatDate(a.start)}
              </p>
              <span
                className={`mt-1 inline-block rounded-full px-2 py-0.5 text-xs font-medium ${
                  a.status === "confirmed"
                    ? "bg-brand-100 text-brand-700"
                    : a.status === "completed"
                      ? "bg-green-100 text-green-700"
                      : "bg-gray-100 text-gray-600"
                }`}
              >
                {STATUS_LABELS[a.status]}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}
