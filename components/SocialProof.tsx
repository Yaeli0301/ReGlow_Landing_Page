import { Section } from "./ui/Section";

export function SocialProof() {
  return (
    <Section className="py-14 md:py-20">
      <div className="mx-auto max-w-xl rounded-2xl border border-brand-100 bg-white px-6 py-8 text-center shadow-md md:px-10">
        <p className="text-xl font-bold text-gray-900 sm:text-2xl">
          גרסת בטא פעילה
        </p>
        <p className="mt-3 text-base text-gray-600 sm:text-lg">
          נבדק על ידי קוסמטיקאיות ראשונות
        </p>
      </div>
    </Section>
  );
}
