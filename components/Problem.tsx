import { Section } from "./ui/Section";

const painPoints = [
  "לקוחות נעלמות אחרי טיפול",
  "אין מעקב מי לא חזר",
  "חורים בלוח הזמנים",
  "יותר מדי עבודה ידנית",
];

export function Problem() {
  return (
    <Section className="bg-white/70 py-14 md:py-20">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-2xl font-bold leading-snug text-gray-900 sm:text-3xl">
          זה לא שאת לא טובה — פשוט אין לך מערכת שעוקבת
        </h2>
      </div>

      <ul className="mx-auto mt-10 max-w-lg space-y-4">
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
        🟥 לקוחות שאיבדת = כסף שאיבדת
      </p>
    </Section>
  );
}
