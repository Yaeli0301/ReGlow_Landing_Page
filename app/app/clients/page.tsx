"use client";

import { PageHeader } from "@/components/app/PageHeader";
import { useDemo } from "@/context/DemoContext";
import { formatDateShort } from "@/lib/demo/format";

export default function ClientsPage() {
  const { data } = useDemo();
  if (!data) return null;

  return (
    <>
      <PageHeader
        title="לקוחות"
        subtitle={`${data.clients.length} לקוחות בקליניקה שלך`}
      />
      <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
        <table className="w-full text-sm">
          <thead className="bg-gray-50 text-right">
            <tr>
              <th className="px-4 py-3 font-semibold">שם</th>
              <th className="hidden px-4 py-3 font-semibold sm:table-cell">טלפון</th>
              <th className="px-4 py-3 font-semibold">ביקור אחרון</th>
              <th className="px-4 py-3 font-semibold">ביקורים</th>
              <th className="px-4 py-3 font-semibold">סטטוס</th>
            </tr>
          </thead>
          <tbody>
            {data.clients.map((c) => (
              <tr key={c.id} className="border-t border-gray-100">
                <td className="px-4 py-3 font-medium">{c.name}</td>
                <td className="hidden px-4 py-3 text-gray-500 sm:table-cell" dir="ltr">
                  {c.phone}
                </td>
                <td className="px-4 py-3 text-gray-600">
                  {formatDateShort(c.lastVisit)}
                </td>
                <td className="px-4 py-3">{c.totalVisits}</td>
                <td className="px-4 py-3">
                  {c.atRisk ? (
                    <span className="rounded-full bg-red-100 px-2 py-0.5 text-xs font-medium text-red-700">
                      בסיכון
                    </span>
                  ) : (
                    <span className="rounded-full bg-green-100 px-2 py-0.5 text-xs font-medium text-green-700">
                      פעילה
                    </span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
