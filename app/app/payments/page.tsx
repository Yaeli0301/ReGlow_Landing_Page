"use client";

import { PageHeader } from "@/components/app/PageHeader";
import { useDemo } from "@/context/DemoContext";
import { formatCurrency, formatDateShort, STATUS_LABELS } from "@/lib/demo/format";

export default function PaymentsPage() {
  const { data } = useDemo();
  if (!data) return null;

  const clientMap = Object.fromEntries(data.clients.map((c) => [c.id, c]));

  return (
    <>
      <PageHeader title="תשלומים" subtitle="מעקב אחרי תשלומים ששולמו וממתינים" />
      <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
        <table className="w-full text-sm">
          <thead className="bg-gray-50 text-right">
            <tr>
              <th className="px-4 py-3 font-semibold">לקוחה</th>
              <th className="px-4 py-3 font-semibold">שירות</th>
              <th className="px-4 py-3 font-semibold">סכום</th>
              <th className="px-4 py-3 font-semibold">תאריך</th>
              <th className="px-4 py-3 font-semibold">סטטוס</th>
            </tr>
          </thead>
          <tbody>
            {data.payments.map((p) => (
              <tr key={p.id} className="border-t border-gray-100">
                <td className="px-4 py-3 font-medium">
                  {clientMap[p.clientId]?.name}
                </td>
                <td className="px-4 py-3 text-gray-600">{p.serviceName}</td>
                <td className="px-4 py-3 font-medium">
                  {formatCurrency(p.amount)}
                </td>
                <td className="px-4 py-3 text-gray-500">
                  {formatDateShort(p.date)}
                </td>
                <td className="px-4 py-3">
                  <span
                    className={`rounded-full px-2 py-0.5 text-xs font-medium ${
                      p.status === "paid"
                        ? "bg-green-100 text-green-700"
                        : p.status === "pending"
                          ? "bg-amber-100 text-amber-800"
                          : "bg-gray-100 text-gray-600"
                    }`}
                  >
                    {STATUS_LABELS[p.status]}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
