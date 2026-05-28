"use client";

import { useState } from "react";

const popularItems = [
  {
    num: "01",
    title: "Mengapa Kelangkaan Chip Global Akhirnya Berakhir",
    meta: "Teknologi • 29 Mei 2026 • 12rb Pembaca",
  },
  {
    num: "02",
    title: "10 Destinasi Tersembunyi Terbaik di Asia Tenggara",
    meta: "Wisata • 29 Mei 2026 • 8rb Pembaca",
  },
  {
    num: "03",
    title: "Bagaimana Kerja Remote Mematikan Kereta Komuter",
    meta: "Bisnis • 29 Mei 2026 • 7rb Pembaca",
  },
];

const latestNews = [
  {
    time: "2 Menit Lalu • 29 Mei 2026",
    title: "Inisiatif Pertahanan Siber Besar Diluncurkan di Kawasan Nordik",
    active: true,
  },
  {
    time: "15 Menit Lalu • 29 Mei 2026",
    title: "Saham Melemah Akibat Kekhawatiran Suku Bunga Kembali Muncul",
    active: false,
  },
];

export default function Sidebar() {
  const [email, setEmail] = useState("");

  return (
    <aside className="lg:col-span-4 space-y-12">
      {/* Ad */}
      <div className="w-full">
        <div className="w-full h-[250px] bg-[#35343a] border border-[#424752] flex items-center justify-center text-[#424752] font-[family-name:var(--font-hanken)] uppercase tracking-widest overflow-hidden">
          <span className="opacity-40 text-center px-4">Iklan 300x250</span>
        </div>
      </div>

      {/* Popular */}
      <div className="bg-[#1f1f25] border border-[#424752] p-6">
        <h2 className="font-[family-name:var(--font-hanken)] font-bold text-white mb-6 border-b border-[#424752] pb-2 uppercase tracking-widest text-sm">
          POPULER
        </h2>
        <div className="space-y-6">
          {popularItems.map((item) => (
            <div key={item.num} className="flex gap-4 group cursor-pointer">
              <span className="font-[family-name:var(--font-chivo)] text-2xl font-bold text-[#424752] italic shrink-0">
                {item.num}
              </span>
              <div>
                <h4 className="font-[family-name:var(--font-hanken)] font-semibold text-white group-hover:text-[#acc7ff] transition-colors">
                  {item.title}
                </h4>
                <p className="font-[family-name:var(--font-hanken)] text-xs text-[#8c909e] mt-1">
                  {item.meta}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Latest News */}
      <div className="space-y-4">
        <h2 className="font-[family-name:var(--font-hanken)] font-bold text-sm text-[#acc7ff] mb-4 border-b border-[#acc7ff] pb-2 uppercase tracking-widest">
          BERITA TERBARU
        </h2>
        <div className="space-y-4">
          {latestNews.map((news) => (
            <article
              key={news.title}
              className={`p-4 bg-[#1b1b20] border-l-2 hover:bg-[#1f1f25] transition-colors ${
                news.active ? "border-[#acc7ff]" : "border-[#424752]"
              }`}
            >
              <p
                className={`font-[family-name:var(--font-hanken)] text-xs uppercase ${
                  news.active ? "text-[#acc7ff]" : "text-[#8c909e]"
                }`}
              >
                {news.time}
              </p>
              <h4 className="font-[family-name:var(--font-hanken)] font-semibold text-white mt-1 text-sm">
                {news.title}
              </h4>
            </article>
          ))}
        </div>
        <button className="w-full py-3 border border-[#424752] font-[family-name:var(--font-hanken)] font-semibold text-sm text-white hover:bg-[#1f1f25] transition-colors">
          Lihat Berita Lainnya
        </button>
      </div>

      {/* Newsletter */}
      <div className="bg-[#0056b3] p-8 rounded-sm text-white">
        <h3 className="font-[family-name:var(--font-chivo)] text-xl font-bold mb-2">
          Harian NTB Satu
        </h3>
        <p className="font-[family-name:var(--font-newsreader)] text-blue-100 mb-6">
          Berita global terpenting, dikurasi dan dikirim langsung ke email Anda
          setiap pagi.
        </p>
        <div className="space-y-4">
          <input
            className="w-full bg-black/20 border border-white/20 px-4 py-3 text-white placeholder:text-white/60 focus:ring-1 focus:ring-white outline-none rounded-sm"
            placeholder="Alamat Email Anda"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button className="w-full bg-white text-[#0056b3] font-[family-name:var(--font-hanken)] font-bold py-3 hover:bg-blue-50 transition-colors">
            Berlangganan Sekarang
          </button>
        </div>
      </div>
    </aside>
  );
}
