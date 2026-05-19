import Link from "next/link";
import { getDemoStartPath, PRIMARY_CTA } from "@/lib/site";

export function MobileCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-brand-100 bg-white/95 p-3 backdrop-blur-md sm:hidden">
      <Link
        href={getDemoStartPath("pro")}
        className="flex w-full items-center justify-center rounded-xl bg-gradient-to-l from-brand-500 to-purple-500 py-3.5 text-base font-bold text-white shadow-lg"
      >
        {PRIMARY_CTA}
      </Link>
    </div>
  );
}
