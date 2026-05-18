import { Section } from "./ui/Section";

const steps = [
  {
    number: "1",
    title: "נרשמת ב-30 שניות",
    description: "הרשמה מהירה — בלי טכני",
    preview: (
      <div className="space-y-2 text-right text-xs">
        <div className="rounded-lg bg-white p-2 shadow-sm">שם הקליניקה ✓</div>
        <div className="rounded-lg bg-white p-2 shadow-sm">טלפון ✓</div>
        <div className="rounded-lg bg-brand-100 p-2 font-bold text-brand-700">
          מוכן להתחיל!
        </div>
      </div>
    ),
  },
  {
    number: "2",
    title: "הלקוחות שלך נכנסים דרך קישור אישי",
    description: "דף הזמנה שממלא את היומן",
    preview: (
      <div className="rounded-lg bg-white p-2 text-right text-xs shadow-sm">
        <p className="font-bold text-brand-600">reglow.app/salon</p>
        <p className="mt-1 text-gray-500">קביעת תור · 3 שירותים</p>
      </div>
    ),
  },
  {
    number: "3",
    title: "המערכת מחזירה לקוחות אוטומטית",
    description: "הודעות שמביאות לקוחות חוזרות",
    preview: (
      <div className="rounded-lg bg-green-50 p-2 text-right text-xs text-green-900">
        <p>💬 היי מיכל, יש מקום השבוע?</p>
        <p className="mt-1 text-[10px] text-green-700">נשלח אוטומטית</p>
      </div>
    ),
  },
];

export function HowItWorks() {
  return (
    <Section
      id="how-it-works"
      className="bg-gradient-to-b from-purple-50/50 to-brand-50/30 py-14 md:py-20"
    >
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">
          איך זה עובד
        </h2>
        <p className="mt-3 text-gray-600">3 צעדים — ואת כבר בתוך המערכת</p>
      </div>

      <div className="mt-10 grid gap-5 sm:grid-cols-3">
        {steps.map((step) => (
          <article
            key={step.number}
            className="flex flex-col rounded-2xl border border-brand-100 bg-white p-5 shadow-lg"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500 to-purple-500 text-lg font-bold text-white">
              {step.number}
            </span>
            <div className="mt-4 min-h-[88px] rounded-xl bg-gradient-to-br from-brand-50 to-purple-50 p-4">
              {step.preview}
            </div>
            <h3 className="mt-4 text-lg font-bold text-gray-900">{step.title}</h3>
            <p className="mt-1 text-sm text-gray-600">{step.description}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}
