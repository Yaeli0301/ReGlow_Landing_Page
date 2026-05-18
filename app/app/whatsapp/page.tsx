"use client";

import { PageHeader } from "@/components/app/PageHeader";
import { FeatureGate } from "@/components/demo/FeatureGate";
import { useDemo } from "@/context/DemoContext";

const MESSAGES = [
  {
    to: "מיכל כהן",
    text: "היי מיכל 💖 עברו כמה שבועות מהטיפול האחרון. יש לי מקום ביומן השבוע — רוצה לקבוע?",
    sent: "לפני 2 שעות",
    auto: true,
  },
  {
    to: "דנה פרץ",
    text: "בוקר טוב דנה! רציתי לוודא שהכל בסדר אחרי הפילינג. יש מקום ביום חמישי 😊",
    sent: "אתמול",
    auto: true,
  },
  {
    to: "רונית גולן",
    text: "תזכורת: מחר ב-10:00 טיפול פנים. מחכה לראות אותך!",
    sent: "לפני 3 ימים",
    auto: true,
  },
];

export default function WhatsappPage() {
  return (
    <FeatureGate feature="whatsapp">
      <WhatsappContent />
    </FeatureGate>
  );
}

function WhatsappContent() {
  const { data } = useDemo();
  if (!data) return null;

  const atRisk = data.clients.filter((c) => c.atRisk);

  return (
    <>
      <PageHeader
        title="הודעות וואטסאפ"
        subtitle={`${atRisk.length} לקוחות ממתינות להודעת חזרה אוטומטית`}
      />
      <div className="mb-4 rounded-xl border border-green-200 bg-green-50 p-4 text-sm text-green-800">
        ✓ האוטומציה פעילה — הודעות נשלחות אוטומטית ללקוחות שלא חזרו
      </div>
      <ul className="space-y-3">
        {MESSAGES.map((m, i) => (
          <li
            key={i}
            className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm"
          >
            <div className="flex items-center justify-between gap-2">
              <span className="font-bold text-gray-900">{m.to}</span>
              <span className="text-xs text-gray-400">{m.sent}</span>
            </div>
            <p className="mt-2 text-sm text-gray-700">{m.text}</p>
            {m.auto && (
              <span className="mt-2 inline-block rounded-full bg-brand-100 px-2 py-0.5 text-xs font-medium text-brand-700">
                נשלח אוטומטית
              </span>
            )}
          </li>
        ))}
      </ul>
    </>
  );
}
