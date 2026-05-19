import { Section } from "./ui/Section";

const features = [
  { icon: "👥", text: "ניהול לקוחות חכם" },
  { icon: "🔔", text: "זיהוי לקוחות שלא חזרו" },
  { icon: "💬", text: "הודעות אוטומטיות" },
  { icon: "📅", text: "יומן תורים חכם" },
  { icon: "🔗", text: "דף הזמנות אישי" },
];

export function Features() {
  return (
    <Section className="bg-white/70 py-14 md:py-20">
      <ul className="mx-auto grid max-w-2xl gap-3 sm:grid-cols-2">
        {features.map((f) => (
          <li
            key={f.text}
            className="flex items-center gap-3 rounded-xl border border-brand-100 bg-white px-4 py-3.5 shadow-sm"
          >
            <span className="text-xl" aria-hidden>
              {f.icon}
            </span>
            <span className="font-medium text-gray-800">{f.text}</span>
          </li>
        ))}
      </ul>
    </Section>
  );
}
