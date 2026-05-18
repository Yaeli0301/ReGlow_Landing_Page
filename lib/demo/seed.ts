import type { DemoData } from "./types";

function daysFromNow(days: number, hour = 10, minute = 0): string {
  const d = new Date();
  d.setDate(d.getDate() + days);
  d.setHours(hour, minute, 0, 0);
  return d.toISOString();
}

function daysAgo(days: number, hour = 11, minute = 0): string {
  return daysFromNow(-days, hour, minute);
}

export function createSeedData(): DemoData {
  const services = [
    { id: "s1", name: "טיפול פנים קלאסי", durationMin: 60, price: 320 },
    { id: "s2", name: "פילינג עדין", durationMin: 45, price: 280 },
    { id: "s3", name: "מיקרונידלינג", durationMin: 75, price: 450 },
    { id: "s4", name: "מסכת הזנה", durationMin: 30, price: 180 },
    { id: "s5", name: "ייעוץ ראשון", durationMin: 30, price: 0 },
  ];

  const clients = [
    { id: "c1", name: "נועה לוי", phone: "052-1234567", lastVisit: daysAgo(12), totalVisits: 8, atRisk: false },
    { id: "c2", name: "מיכל כהן", phone: "054-2345678", lastVisit: daysAgo(38), totalVisits: 5, atRisk: true },
    { id: "c3", name: "שירה אברהם", phone: "050-3456789", lastVisit: daysAgo(5), totalVisits: 12, atRisk: false },
    { id: "c4", name: "דנה פרץ", phone: "053-4567890", lastVisit: daysAgo(42), totalVisits: 3, atRisk: true },
    { id: "c5", name: "יעל מזרחי", phone: "052-5678901", lastVisit: daysAgo(2), totalVisits: 15, atRisk: false },
    { id: "c6", name: "רונית גולן", phone: "054-6789012", lastVisit: daysAgo(31), totalVisits: 6, atRisk: true },
    { id: "c7", name: "הילה שמש", phone: "050-7890123", lastVisit: daysAgo(8), totalVisits: 9, atRisk: false },
    { id: "c8", name: "אורית בר", phone: "053-8901234", lastVisit: daysAgo(55), totalVisits: 2, atRisk: true },
    { id: "c9", name: "תמר דוד", phone: "052-9012345", lastVisit: daysAgo(1), totalVisits: 11, atRisk: false },
    { id: "c10", name: "ליאת חן", phone: "054-0123456", lastVisit: daysAgo(18), totalVisits: 7, atRisk: false },
    { id: "c11", name: "עדי רוזן", phone: "050-1122334", lastVisit: daysAgo(35), totalVisits: 4, atRisk: true },
    { id: "c12", name: "קרן אשכנזי", phone: "053-2233445", lastVisit: daysAgo(4), totalVisits: 10, atRisk: false },
  ];

  const appointments = [
    { id: "a1", clientId: "c9", serviceId: "s1", start: daysAgo(1, 14), status: "completed" as const },
    { id: "a2", clientId: "c5", serviceId: "s3", start: daysAgo(2, 10), status: "completed" as const },
    { id: "a3", clientId: "c3", serviceId: "s2", start: daysAgo(5, 16), status: "completed" as const },
    { id: "a4", clientId: "c7", serviceId: "s4", start: daysAgo(8, 11), status: "completed" as const },
    { id: "a5", clientId: "c2", serviceId: "s1", start: daysAgo(38, 9), status: "no-show" as const },
    { id: "a6", clientId: "c4", serviceId: "s2", start: daysAgo(42, 15), status: "cancelled" as const },
    { id: "a7", clientId: "c9", serviceId: "s1", start: daysFromNow(0, 14), status: "confirmed" as const },
    { id: "a8", clientId: "c5", serviceId: "s4", start: daysFromNow(0, 16), status: "confirmed" as const },
    { id: "a9", clientId: "c12", serviceId: "s3", start: daysFromNow(1, 10), status: "confirmed" as const },
    { id: "a10", clientId: "c3", serviceId: "s1", start: daysFromNow(1, 12), status: "confirmed" as const },
    { id: "a11", clientId: "c1", serviceId: "s2", start: daysFromNow(2, 11), status: "confirmed" as const },
    { id: "a12", clientId: "c10", serviceId: "s1", start: daysFromNow(3, 9), status: "confirmed" as const },
    { id: "a13", clientId: "c7", serviceId: "s3", start: daysFromNow(4, 14), status: "confirmed" as const },
    { id: "a14", clientId: "c6", serviceId: "s5", start: daysFromNow(5, 10), status: "confirmed" as const },
  ];

  const payments = [
    { id: "p1", clientId: "c9", amount: 320, status: "paid" as const, date: daysAgo(1), serviceName: "טיפול פנים קלאסי" },
    { id: "p2", clientId: "c5", amount: 450, status: "paid" as const, date: daysAgo(2), serviceName: "מיקרונידלינג" },
    { id: "p3", clientId: "c3", amount: 280, status: "paid" as const, date: daysAgo(5), serviceName: "פילינג עדין" },
    { id: "p4", clientId: "c7", amount: 180, status: "paid" as const, date: daysAgo(8), serviceName: "מסכת הזנה" },
    { id: "p5", clientId: "c12", amount: 450, status: "pending" as const, date: daysFromNow(1), serviceName: "מיקרונידלינג" },
    { id: "p6", clientId: "c1", amount: 280, status: "pending" as const, date: daysFromNow(2), serviceName: "פילינג עדין" },
    { id: "p7", clientId: "c10", amount: 320, status: "pending" as const, date: daysFromNow(3), serviceName: "טיפול פנים קלאסי" },
    { id: "p8", clientId: "c2", amount: 320, status: "refunded" as const, date: daysAgo(38), serviceName: "טיפול פנים קלאסי" },
  ];

  const automations = [
    { id: "au1", name: "לקוחה לא חזרה 30 יום", enabled: true, sentCount: 14 },
    { id: "au2", name: "תזכורת יום לפני תור", enabled: true, sentCount: 42 },
    { id: "au3", name: "הודעת תודה אחרי טיפול", enabled: true, sentCount: 38 },
    { id: "au4", name: "מילוי חורים ביומן", enabled: false, sentCount: 0 },
    { id: "au5", name: "קמפיין יום הולדת", enabled: false, sentCount: 0 },
  ];

  return { clients, services, appointments, payments, automations };
}
