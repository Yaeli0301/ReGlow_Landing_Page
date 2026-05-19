import Link from "next/link";
import { FOOTER_SIGNUP_CTA, FOOTER_SIGNUP_HEADLINE, getSignupUrl, SUPPORT_EMAIL } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-brand-100 bg-white/90 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-5 text-center sm:px-6">
        <div className="w-full max-w-xl rounded-2xl border-2 border-brand-300 bg-gradient-to-br from-brand-50 via-white to-purple-50 p-6 shadow-lg shadow-brand-500/10">
          <p className="text-lg font-extrabold text-gray-900 sm:text-xl">
            {FOOTER_SIGNUP_HEADLINE}
          </p>
          <p className="mt-2 text-sm text-gray-600">
            מספיק דמו — הגיע הזמן לחשבון אמיתי עם לקוחות, תורים ואוטומציה שלך.
          </p>
          <Link
            href={getSignupUrl("pro")}
            className="mt-4 inline-flex min-h-[48px] w-full items-center justify-center rounded-xl bg-gradient-to-l from-brand-500 to-purple-500 px-6 py-3 text-base font-bold text-white shadow-lg shadow-brand-500/25 transition hover:shadow-xl sm:w-auto"
          >
            {FOOTER_SIGNUP_CTA}
          </Link>
        </div>

        <div className="flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-brand-400 to-purple-500 text-sm font-bold text-white">
            R
          </span>
          <span className="font-bold text-gray-800">ReGlow</span>
        </div>

        <nav className="flex flex-wrap justify-center gap-5 text-sm">
          <a
            href={`mailto:${SUPPORT_EMAIL}`}
            className="text-gray-600 hover:text-brand-600"
          >
            {SUPPORT_EMAIL}
          </a>
          <Link href="/privacy" className="text-gray-600 hover:text-brand-600">
            פרטיות
          </Link>
          <Link href="/terms" className="text-gray-600 hover:text-brand-600">
            תנאי שימוש
          </Link>
        </nav>

        <p className="text-xs text-gray-400">
          © {new Date().getFullYear()} ReGlow
        </p>
      </div>
    </footer>
  );
}
