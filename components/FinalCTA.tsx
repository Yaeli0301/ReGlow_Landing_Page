import { Button } from "./ui/Button";
import { getDemoEnterUrl, PRIMARY_CTA } from "@/lib/site";

export function FinalCTA() {
  return (
    <section id="cta" className="py-14 md:py-20">
      <div className="mx-auto max-w-3xl px-5 sm:px-6">
        <div className="rounded-3xl bg-gradient-to-br from-brand-500 via-brand-600 to-purple-600 px-8 py-12 text-center shadow-2xl shadow-brand-600/25 md:px-12 md:py-14">
          <h2 className="text-2xl font-extrabold text-white sm:text-3xl md:text-4xl">
            להתחיל להכניס יותר לקוחות כבר השבוע 💖
          </h2>

          <Button
            href={getDemoEnterUrl("pro")}
            variant="secondary"
            size="lg"
            className="mt-8 !border-white !bg-white !text-brand-600 hover:!bg-brand-50"
          >
            {PRIMARY_CTA}
          </Button>

          <p className="mt-5 text-sm font-semibold text-white/90">
            רק משתמשות ראשונות במחיר השקה
          </p>
          <p className="mt-2 text-sm text-white/75">ביטול בכל רגע</p>
        </div>
      </div>
    </section>
  );
}
