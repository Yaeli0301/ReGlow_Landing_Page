import { Section } from "./ui/Section";

export function Solution() {
  return (
    <Section className="py-14 md:py-20">
      <p className="mx-auto max-w-2xl rounded-2xl border border-brand-100 bg-white px-6 py-8 text-center text-xl font-semibold leading-relaxed text-gray-800 shadow-md sm:text-2xl">
        המערכת מזהה לקוחות שלא חזרו ושולחת להן הודעה אוטומטית שמחזירה אותן
        לתור.
      </p>
    </Section>
  );
}
