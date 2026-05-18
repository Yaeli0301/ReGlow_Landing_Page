import { Section } from "./ui/Section";

function Stars() {
  return (
    <span className="text-amber-400" aria-label="5 כוכבים">
      ★★★★★
    </span>
  );
}

const testimonials = [
  {
    quote: "סוף סוף יש לי מערכת שזוכרת את הלקוחות במקומי",
    author: "מיכל",
    role: "קוסמטיקאית, תל אביב",
    rating: 5,
  },
  {
    quote: "היומן שלי מלא יותר — בלי לרדוף אחרי אף אחת",
    author: "שירה",
    role: "קליניקה ליופי, חיפה",
    rating: 5,
  },
  {
    quote: "הלקוחות חוזרות לבד. זה מרגיש כמו עובדת נוספת",
    author: "דנה",
    role: "קוסמטיקאית, ירושלים",
    rating: 5,
  },
];

export function SocialProof() {
  return (
    <Section className="py-14 md:py-20">
      <div className="rounded-2xl bg-gradient-to-br from-brand-500 to-purple-600 px-6 py-8 text-center text-white shadow-xl md:px-10">
        <p className="text-2xl font-bold sm:text-3xl">
          10+ קוסמטיקאיות כבר בפנים
        </p>
        <p className="mt-2 text-lg text-white/90">
          עלייה של 20–30% בלקוחות חוזרים
        </p>
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((t) => (
          <article
            key={t.author}
            className="rounded-2xl border border-brand-100 bg-white p-5 shadow-md"
          >
            <Stars />
            <p className="mt-3 text-gray-700">&ldquo;{t.quote}&rdquo;</p>
            <footer className="mt-4 border-t border-gray-100 pt-3">
              <p className="font-bold text-gray-900">{t.author}</p>
              <p className="text-sm text-gray-500">{t.role}</p>
            </footer>
          </article>
        ))}
      </div>
    </Section>
  );
}
