import { Section } from "./ui/Section";

const mechanism = [
  {
    step: "1",
    text: "המערכת מזהה לקוחות שלא חזרו אחרי 30 יום",
    icon: "🔍",
  },
  {
    step: "2",
    text: "שולחת להם הודעת וואטסאפ אוטומטית",
    icon: "💬",
  },
  {
    step: "3",
    text: "מחזירה אותם לתור",
    icon: "📅",
  },
];

export function Solution() {
  return (
    <Section className="py-14 md:py-20">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">
          מה אם לקוחות היו חוזרות לבד?
        </h2>
        <p className="mt-6 text-xl font-semibold text-brand-600">
          בלי שתעשי כלום
        </p>
      </div>

      <div className="mt-10 space-y-4">
        {mechanism.map((item) => (
          <div
            key={item.step}
            className="flex items-center gap-4 rounded-2xl border border-brand-100 bg-white p-5 shadow-md"
          >
            <span
              className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-100 text-xl"
              aria-hidden
            >
              {item.icon}
            </span>
            <p className="font-medium text-gray-800">{item.text}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
