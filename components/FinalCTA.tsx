import { Button } from "./ui/Button";
import { getDemoStartPath, PRIMARY_CTA } from "@/lib/site";

export function FinalCTA() {
  return (
    <section
      id="cta"
      className="bg-gradient-to-br from-brand-500 via-brand-600 to-purple-600 px-5 py-14 text-center shadow-2xl shadow-brand-600/25 sm:px-6 md:py-20"
    >
      <h2 className="mx-auto max-w-2xl text-2xl font-extrabold text-white sm:text-3xl md:text-4xl">
        תתחילי לקבל יותר לקוחות כבר השבוע 💖
      </h2>

      <Button
        href={getDemoStartPath("pro")}
        variant="secondary"
        size="lg"
        className="mt-8 !border-white !bg-white !text-brand-600 hover:!bg-brand-50"
      >
        {PRIMARY_CTA}
      </Button>
    </section>
  );
}
