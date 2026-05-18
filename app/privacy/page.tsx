import Link from "next/link";

export const metadata = { title: "מדיניות פרטיות | ReGlow" };

export default function PrivacyPage() {
  return (
    <main className="mx-auto max-w-2xl px-5 py-16">
      <h1 className="text-2xl font-bold">מדיניות פרטיות</h1>
      <p className="mt-4 text-gray-600">תוכן מדיניות פרטיות יתווסף כאן.</p>
      <Link href="/" className="mt-8 inline-block text-brand-600 hover:underline">
        חזרה לדף הבית
      </Link>
    </main>
  );
}
