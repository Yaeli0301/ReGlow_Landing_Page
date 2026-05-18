import Link from "next/link";
import { ProductMockup } from "./landing/ProductMockup";
import { Button } from "./ui/Button";
import { getDemoEnterUrl, PRIMARY_CTA, SECONDARY_CTA } from "@/lib/site";

export function Hero() {
  return (
    <section className="relative overflow-hidden pb-12 pt-4 md:pb-16 md:pt-8">
      <div className="pointer-events-none absolute -top-20 -right-20 h-64 w-64 rounded-full bg-brand-200/40 blur-3xl" />
      <div className="pointer-events-none absolute top-32 -left-16 h-56 w-56 rounded-full bg-purple-200/40 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <span className="mb-4 inline-block rounded-full bg-brand-100 px-4 py-1.5 text-sm font-semibold text-brand-700">
            הדגמה חינם · בלי כרטיס אשראי
          </span>

          <h1 className="text-[1.75rem] font-extrabold leading-[1.15] tracking-tight text-gray-900 sm:text-4xl md:text-5xl">
            את מאבדת לקוחות בלי לשים לב{" "}
            <span aria-hidden>💔</span>
          </h1>

          <p className="mt-5 text-lg leading-relaxed text-gray-600 sm:text-xl">
            מערכת חכמה שמחזירה לקוחות לקוסמטיקאיות אוטומטית וממלאת יותר תורים —
            בלי עבודה נוספת
          </p>

          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button href={getDemoEnterUrl("pro")}>{PRIMARY_CTA}</Button>
            <Link
              href="#how-it-works"
              className="text-base font-semibold text-brand-600 underline-offset-4 hover:text-brand-700 hover:underline"
            >
              {SECONDARY_CTA}
            </Link>
          </div>
        </div>

        <ProductMockup />
      </div>
    </section>
  );
}
