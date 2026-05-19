import Link from "next/link";
import { demoCtaLabel } from "@/lib/plans";
import { getDemoStartPath, PRIMARY_CTA, type PlanId } from "@/lib/site";

type Props = {
  plan: PlanId;
  variant?: "primary" | "secondary";
  className?: string;
  label?: string;
};

const styles = {
  primary:
    "bg-gradient-to-l from-brand-500 to-purple-500 text-white shadow-lg shadow-brand-500/25 hover:shadow-xl",
  secondary:
    "bg-white text-brand-600 border-2 border-brand-200 hover:border-brand-400 hover:bg-brand-50 shadow-md",
};

export function StartDemoButton({
  plan,
  variant = "primary",
  className = "",
  label,
}: Props) {
  const href = getDemoStartPath(plan);
  const text = label ?? (plan === "pro" ? PRIMARY_CTA : demoCtaLabel(plan));

  return (
    <Link
      href={href}
      className={`inline-flex w-full items-center justify-center rounded-xl px-6 py-3 text-base font-bold transition-all ${styles[variant]} ${className}`}
    >
      {text}
    </Link>
  );
}
