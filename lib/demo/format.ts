export function formatDate(iso: string): string {
  return new Intl.DateTimeFormat("he-IL", {
    day: "numeric",
    month: "short",
    hour: "2-digit",
    minute: "2-digit",
  }).format(new Date(iso));
}

export function formatDateShort(iso: string): string {
  return new Intl.DateTimeFormat("he-IL", {
    day: "numeric",
    month: "short",
    year: "numeric",
  }).format(new Date(iso));
}

export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat("he-IL", {
    style: "currency",
    currency: "ILS",
    maximumFractionDigits: 0,
  }).format(amount);
}

export const STATUS_LABELS: Record<string, string> = {
  confirmed: "מאושר",
  completed: "הושלם",
  cancelled: "בוטל",
  "no-show": "לא הגיעה",
  paid: "שולם",
  pending: "ממתין",
  refunded: "הוחזר",
};
