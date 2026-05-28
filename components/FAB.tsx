"use client";

export default function FAB() {
  return (
    <button className="fixed bottom-8 right-8 bg-[#0056b3] text-white p-4 shadow-lg hover:scale-110 transition-transform active:scale-95 group flex items-center gap-2 z-50">
      <span className="material-symbols-outlined">bolt</span>
      <span className="font-[family-name:var(--font-hanken)] font-semibold hidden group-hover:block whitespace-nowrap">
        Waspada Berita Sela
      </span>
    </button>
  );
}
