export default function NewsTicker() {
  const items = [
    "Pasar Global Menguat Seiring Melandainya Inflasi",
    "Terobosan Teknologi Baru di Sektor Semikonduktor Silicon Valley",
    "Kebijakan Energi Berkelanjutan Disahkan di Parlemen Eropa",
    "Olahraga: Kemenangan Bersejarah Tim Kuda Hitam di Final Global",
  ];

  return (
    <div className="w-full bg-black h-10 flex items-center overflow-hidden z-50 relative">
      <div className="bg-[#0056b3] px-4 h-full flex items-center z-10 shrink-0">
        <span className="font-[family-name:var(--font-hanken)] text-white tracking-widest uppercase text-sm font-semibold">
          Breaking News
        </span>
      </div>
      <div className="ticker-scroll flex gap-8 items-center">
        {items.map((item, i) => (
          <>
            <span
              key={item}
              className="font-[family-name:var(--font-newsreader)] text-white"
            >
              {item}
            </span>
            {i < items.length - 1 && (
              <span key={`dot-${i}`} className="text-[#0056b3]">
                •
              </span>
            )}
          </>
        ))}
      </div>
    </div>
  );
}
