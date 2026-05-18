import type { Metadata } from "next";
import { Heebo } from "next/font/google";
import "./globals.css";

const heebo = Heebo({
  subsets: ["hebrew", "latin"],
  variable: "--font-heebo",
  display: "swap",
});

export const metadata: Metadata = {
  title: "ReGlow | מערכת שמחזירה לקוחות לקוסמטיקאיות",
  description:
    "מערכת חכמה שמחזירה לקוחות לקוסמטיקאיות אוטומטית, ממלאת יותר תורים ומגדילה הכנסה מלקוחות חוזרות — בלי עבודה ידנית.",
  keywords: [
    "קוסמטיקאית",
    "ניהול תורים",
    "לקוחות חוזרות",
    "סאס לקוסמטיקאיות",
    "ReGlow",
  ],
  openGraph: {
    title: "ReGlow | את מאבדת לקוחות בלי לשים לב",
    description:
      "מערכת חכמה שמחזירה לקוחות אוטומטית וממלאת יותר תורים בלי עבודה נוספת.",
    locale: "he_IL",
    type: "website",
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "ReGlow",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  description:
    "מערכת חכמה שמחזירה לקוחות לקוסמטיקאיות אוטומטית וממלאת יותר תורים",
  offers: {
    "@type": "AggregateOffer",
    lowPrice: "99",
    highPrice: "299",
    priceCurrency: "ILS",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="he" dir="rtl" className={heebo.variable}>
      <body className="min-h-screen bg-[#fdf4f8] font-sans text-gray-800 antialiased pb-20 sm:pb-0">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
