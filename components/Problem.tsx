import { Section } from "./ui/Section";

const painPoints = [
  "לקוחה שהייתה קבועה נעלמה",
  "אין מעקב אחרי לקוחות שלא חוזרות",
  "חורים ביומן שלא שמים לב אליהם",
  "יותר מדי עבודה ידנית",
];

export function Problem() {
  return (
    <Section className="bg-white/70 py-14 md:py-20">
      <ul className="mx-auto max-w-lg space-y-4">
        {painPoints.map((text) => (
          <li
            key={text}
            className="flex items-center gap-3 rounded-xl border border-red-100 bg-red-50/60 px-5 py-4 text-gray-800"
          >
            <span className="text-red-400" aria-hidden>
              ✕
            </span>
            <span className="font-medium">{text}</span>
          </li>
        ))}
      </ul>

      <p className="mx-auto mt-10 max-w-md rounded-2xl border border-red-200 bg-red-50 px-6 py-4 text-center text-lg font-bold text-red-700">
        כל לקוחה שלא חוזרת = כסף שאבד
      </p>
    </Section>
  );
}
