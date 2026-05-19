import { Section } from "./ui/Section";

const steps = [
  "נרשמת למערכת",
  "הלקוחות נכנסות למערכת הזמנות",
  "המערכת מחזירה לקוחות אוטומטית",
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
      </div>

      <ol className="mx-auto mt-10 max-w-lg space-y-4">
        {steps.map((title, index) => (
          <li
            key={title}
            className="flex items-center gap-4 rounded-2xl border border-brand-100 bg-white p-5 shadow-lg"
          >
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500 to-purple-500 text-lg font-bold text-white">
              {index + 1}
            </span>
            <p className="text-lg font-bold text-gray-900">{title}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
