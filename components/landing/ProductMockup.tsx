/** Hero product preview — shows what the demo feels like */
export function ProductMockup() {
  return (
    <div
      className="mx-auto mt-10 w-full max-w-lg overflow-hidden rounded-2xl border border-white/80 bg-white shadow-2xl shadow-brand-500/15"
      aria-hidden
    >
      <div className="flex items-center justify-between border-b border-gray-100 bg-gradient-to-l from-brand-50 to-purple-50 px-4 py-2">
        <span className="text-xs font-bold text-brand-700">ReGlow · מצב הדגמה</span>
        <span className="rounded-full bg-amber-200 px-2 py-0.5 text-[10px] font-bold text-amber-900">
          Pro
        </span>
      </div>
      <div className="grid grid-cols-3 gap-2 p-3 text-center text-[10px]">
        <div className="rounded-lg bg-brand-50 p-2">
          <p className="font-bold text-brand-600">6</p>
          <p className="text-gray-500">תורים</p>
        </div>
        <div className="rounded-lg bg-red-50 p-2">
          <p className="font-bold text-red-600">5</p>
          <p className="text-gray-500">בסיכון</p>
        </div>
        <div className="rounded-lg bg-green-50 p-2">
          <p className="font-bold text-green-600">₪1,230</p>
          <p className="text-gray-500">הכנסה</p>
        </div>
      </div>
      <div className="space-y-2 px-3 pb-3">
        {[
          { name: "תמר דוד", time: "היום 14:00", ok: true },
          { name: "מיכל כהן", time: "לא חזרה 38 יום", ok: false },
          { name: "יעל מזרחי", time: "מחר 10:00", ok: true },
        ].map((row) => (
          <div
            key={row.name}
            className="flex items-center justify-between rounded-lg border border-gray-100 bg-gray-50/80 px-3 py-2 text-xs"
          >
            <span className="font-medium text-gray-800">{row.name}</span>
            <span
              className={
                row.ok ? "text-gray-500" : "font-medium text-red-600"
              }
            >
              {row.time}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
