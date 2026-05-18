import Link from "next/link";

export const metadata = { title: "תנאי שימוש | ReGlow" };

export default function TermsPage() {
  return (
    <main className="mx-auto max-w-2xl px-5 py-16">
      <h1 className="text-2xl font-bold">תנאי שימוש</h1>
      <p className="mt-4 text-gray-600">תוכן תנאי שימוש יתווסף כאן.</p>
      <Link href="/" className="mt-8 inline-block text-brand-600 hover:underline">
        חזרה לדף הבית
      </Link>
    </main>
  );
}
