export default function WeatherDateWidget() {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-stretch sm:items-center mb-6 gap-3 border-b border-[#424752] pb-4">
      {/* Weather card */}
      <div className="flex items-center gap-3 bg-[#1b1b20] px-3 py-2.5 rounded-lg border border-[#424752] min-w-0">
        <span className="material-symbols-outlined text-yellow-500 text-2xl shrink-0">
          partly_cloudy_day
        </span>
        <div className="flex flex-col min-w-0">
          <span className="font-[family-name:var(--font-hanken)] font-semibold text-white text-sm truncate">
            Mataram, NTB
          </span>
          <span className="text-[10px] text-[#c2c6d4]">Cuaca Terkini</span>
        </div>
        <div className="h-7 w-px bg-[#424752] mx-1 shrink-0" />
        <div className="flex items-baseline gap-1 shrink-0">
          <span className="font-[family-name:var(--font-chivo)] text-xl font-bold text-[#acc7ff]">
            29°C
          </span>
          <span className="text-[10px] text-[#8c909e] hidden xs:inline">
            Berawan Sebagian
          </span>
        </div>
        {/* Show condition below on very small screens */}
        <span className="text-[10px] text-[#8c909e] sm:hidden ml-auto">
          Berawan Sebagian
        </span>
      </div>

      {/* Date */}
      <div className="flex sm:flex-col items-center sm:items-end justify-between sm:justify-start gap-1 px-1 sm:px-0">
        <p className="font-[family-name:var(--font-hanken)] font-semibold text-[#acc7ff] uppercase tracking-wider text-xs sm:text-sm">
          Sabtu, 29 Mei 2026
        </p>
        <p className="text-[10px] text-[#c2c6d4] uppercase tracking-wide">
          Edisi Digital Jurnal Kinetik
        </p>
      </div>
    </div>
  );
}
