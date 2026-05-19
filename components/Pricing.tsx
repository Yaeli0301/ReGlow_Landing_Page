import { PRICING_PLANS, PLAN_LABELS } from "@/lib/plans";
import { Section } from "./ui/Section";
import { StartDemoButton } from "./demo/StartDemoButton";

export function Pricing() {
  return (
    <Section id="pricing" className="py-14 md:py-20">
      <div className="mx-auto max-w-5xl px-4">
        <div className="mb-10 text-center">
          <h2 className="text-2xl font-extrabold text-gray-900 md:text-3xl">
            בחרי חבילה — ונסי בדמו לפני שמשלמים
          </h2>
          <p className="mt-2 text-gray-600">
            כל חבילה פותחת חלק אחר באפליקציה. תחושי את ההבדל בין Basic, Pro ו-Premium.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {PRICING_PLANS.map((plan) => (
            <div
              key={plan.id}
              className={`relative flex flex-col rounded-2xl border bg-white p-6 shadow-lg ${
                plan.popular
                  ? "border-2 border-brand-400 shadow-brand-500/15 ring-2 ring-brand-400"
                  : "border-gray-200"
              }`}
            >
              {plan.tag && (
                <span
                  className={`absolute -top-3 start-1/2 -translate-x-1/2 rounded-full px-3 py-0.5 text-xs font-bold text-white ${
                    plan.popular ? "bg-brand-500" : "bg-purple-500"
                  }`}
                >
                  {plan.tag}
                </span>
              )}

              <h3 className="text-lg font-bold text-gray-900">{PLAN_LABELS[plan.id]}</h3>
              <div className="mt-3 flex items-baseline gap-1">
                <span className="text-4xl font-extrabold text-brand-600">{plan.price}</span>
                <span className="text-gray-500">₪ / חודש</span>
              </div>

              <ul className="mt-6 flex-1 space-y-2.5">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2 text-sm text-gray-700"
                  >
                    <span className="mt-0.5 text-brand-500" aria-hidden>
                      ✓
                    </span>
                    {feature}
                  </li>
                ))}
                {plan.locked?.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2 text-sm text-gray-400"
                  >
                    <span className="mt-0.5" aria-hidden>
                      ✕
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
      </div>
    </Section>
  );
}
