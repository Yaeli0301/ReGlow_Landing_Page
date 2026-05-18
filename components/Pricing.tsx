import { Section } from "./ui/Section";
import { StartDemoButton } from "./demo/StartDemoButton";
import type { PlanId } from "@/lib/site";

const plans: {
  id: PlanId;
  name: string;
  price: string;
  features: string[];
  popular?: boolean;
  faded?: boolean;
}[] = [
  {
    id: "basic",
    name: "Basic",
    price: "99",
    features: ["ניהול לקוחות", "תזכורות בסיסיות"],
  },
  {
    id: "pro",
    name: "Pro",
    price: "199",
    features: [
      "מערכת מלאה",
      "אוטומציה ללקוחות חוזרים",
      "ניהול תורים",
    ],
    popular: true,
  },
  {
    id: "premium",
    name: "Premium",
    price: "299",
    features: [
      "מערכת הזמנות אישית",
      "אוטומציה מלאה",
      "עדיפות תמיכה",
    ],
    faded: true,
  },
];

export function Pricing() {
  return (
    <Section id="pricing" className="py-14 md:py-20">
      <div className="mx-auto max-w-xl text-center">
        <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">
          נסי לפני שאת משלמת
        </h2>
        <p className="mt-3 text-gray-600">
          בחרי תוכנית והיכנסי להדגמה אינטראקטיבית — עם נתונים אמיתיים
        </p>
      </div>

      <div className="mt-10 flex gap-4 overflow-x-auto pb-2 snap-x snap-mandatory sm:grid sm:grid-cols-3 sm:overflow-visible sm:pb-0 lg:items-center">
        {plans.map((plan) => (
          <div
            key={plan.id}
            className={`relative min-w-[280px] shrink-0 snap-center rounded-2xl border p-6 sm:min-w-0 ${
              plan.popular
                ? "order-first border-brand-400 bg-white shadow-2xl shadow-brand-500/15 ring-2 ring-brand-400 sm:order-none sm:scale-105 sm:z-10"
                : plan.faded
                  ? "border-gray-200 bg-white shadow-md opacity-90"
                  : "border-gray-200 bg-white shadow-lg"
            }`}
          >
            {plan.popular && (
              <span className="absolute -top-3 right-1/2 translate-x-1/2 whitespace-nowrap rounded-full bg-gradient-to-l from-brand-500 to-purple-500 px-4 py-1 text-xs font-bold text-white shadow-md">
                ⭐ הכי מומלץ
              </span>
            )}

            <h3 className="text-lg font-bold text-gray-900">{plan.name}</h3>
            <div className="mt-3 flex items-baseline gap-1">
              <span
                className={`text-4xl font-extrabold ${plan.popular ? "text-brand-600" : "text-gray-800"}`}
              >
                {plan.price}
              </span>
              <span className="text-gray-500">₪ / חודש</span>
            </div>

            <ul className="mt-6 space-y-2.5">
              {plan.features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-center gap-2 text-sm text-gray-700"
                >
                  <span className="text-brand-500" aria-hidden>
                    ✓
                  </span>
                  {feature}
                </li>
              ))}
            </ul>

            <StartDemoButton
              plan={plan.id}
              variant={plan.popular ? "primary" : "secondary"}
              className="mt-6"
            />
          </div>
        ))}
      </div>
    </Section>
  );
}
