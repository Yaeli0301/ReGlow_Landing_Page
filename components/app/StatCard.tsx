type Props = {
  label: string;
  value: string | number;
  hint?: string;
  accent?: "brand" | "green" | "amber" | "red";
};

const accents = {
  brand: "border-brand-200 bg-brand-50 text-brand-700",
  green: "border-green-200 bg-green-50 text-green-700",
  amber: "border-amber-200 bg-amber-50 text-amber-800",
  red: "border-red-200 bg-red-50 text-red-700",
};

export function StatCard({ label, value, hint, accent = "brand" }: Props) {
  return (
    <div className={`rounded-2xl border p-4 ${accents[accent]}`}>
      <p className="text-sm font-medium opacity-80">{label}</p>
      <p className="mt-1 text-2xl font-extrabold">{value}</p>
      {hint && <p className="mt-1 text-xs opacity-70">{hint}</p>}
    </div>
  );
}
