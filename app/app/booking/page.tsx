"use client";

import { PageHeader } from "@/components/app/PageHeader";
import { FeatureGate } from "@/components/demo/FeatureGate";

export default function BookingPage() {
  return (
    <FeatureGate feature="bookingPage">
      <BookingContent />
    </FeatureGate>
  );
}

function BookingContent() {
  return (
    <>
      <PageHeader
        title="דף הזמנות אישי"
        subtitle="הלקוחות קובעות תור לבד — בלי שיחות והודעות"
      />
      <div className="mx-auto max-w-lg overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-xl">
        <div className="bg-gradient-to-l from-brand-500 to-purple-500 px-6 py-8 text-center text-white">
          <p className="text-lg font-bold">קליניקת יופי — נועה</p>
          <p className="mt-1 text-sm text-white/90">reglow.app/noa-beauty</p>
        </div>
        <div className="space-y-3 p-6">
          {["טיפול פנים קלאסי · 60 דק׳", "פילינג עדין · 45 דק׳", "מיקרונידלינג · 75 דק׳"].map(
            (s) => (
              <button
                key={s}
                type="button"
                className="w-full rounded-xl border border-brand-100 bg-brand-50/50 py-3 text-sm font-medium text-gray-800 hover:bg-brand-50"
              >
                {s}
              </button>
            )
          )}
          <button
            type="button"
            className="mt-2 w-full rounded-xl bg-gradient-to-l from-brand-500 to-purple-500 py-3 font-bold text-white"
          >
            קביעת תור
          </button>
        </div>
      </div>
      <p className="mt-4 text-center text-sm text-gray-500">
        זהו תצוגה מקדימה של דף ההזמנות האישי שלך
      </p>
    </>
  );
}
