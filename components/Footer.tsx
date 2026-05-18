import Link from "next/link";
import { SUPPORT_EMAIL } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-brand-100 bg-white/90 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-5 px-5 text-center sm:px-6">
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
