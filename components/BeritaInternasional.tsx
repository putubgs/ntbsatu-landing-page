import Image from "next/image";
import Link from "next/link";

const IMG1 =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuARbw3vIhpwhflGdwWsI_LWP8E6qBV6mSUAr3FAX35pJO2Q4eHoqreqCMdPmR69mziG7KDmRkAoz9H5yRVSkGTHSXA357kmBoXL-aVHBw3QZx8-p_MmFSeEg50DlXL2OhY4HDWNYhfDUsw90r1IMRIYYy7jUwCR56gh9HWooq_z6UYjiNRCWCIQ-xWqoHmQhYKXgDn4KPuRZPCKi7UTPXTg8xsoYHWmzdoVtaOlwXLFy0j6ffMwrfo50PvWNPgw2xuafkjxwG49Hzf7";
const IMG2 =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDxVCOLLQvrP3f8caaQsgnZjPH24fcH0fLImP0Uox5Bu4mRz9ZMeF2atZR3pyErr10UorBuJjYh49mFPZtEQyIkeMIDDIHu35bnxtge_IJ9qiQ35RaUArCdoadz4bRZpQVjLgUAp7QKT2R7hfaa4ZwNA7010p0Vjjryqd6F30xUjAus2Sb9Ak7Nw2DCjknkK3JeCkZ4q-edrBTlmWa02HpaTz4liOGd1zbyKPCZOywUY72dT5w1ufGY4GlG3ssk6lm39yBGOyK2NSKh";
const IMG3 =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDPK5qYBGGf5l86wXKt-EsK79FLPaVUlloD9976zphtrbZd3ssUIB31cBn5ydPzE5kh6yLcEv-scPHdyXgON4d0roxKXah4PCq0FqHBygFH77nX0XLtjDPTiOhmWKXk8EG4d6UDNGDbkuIY9y9bl1hilomboJfUE2fvyQ_n5t_kryj5Eu1QhdR-RoxjeizZn10He8NQ9KlIO8Lace5zaNzmFm7URLTcnbFlcLn8Y-M3no4HN0gv_sknj4dHrISJdw-xwOcqoTubbh8u";

const articles = [
  {
    img: IMG1,
    alt: "Internasional 1",
    date: "29 Mei 2026",
    title: "Uni Eropa Sepakati Pakta Iklim Baru yang Lebih Ambisius",
  },
  {
    img: IMG2,
    alt: "Internasional 2",
    date: "29 Mei 2026",
    title: "Ekspansi Startup Teknologi di Asia Tenggara Semakin Masif",
  },
  {
    img: IMG3,
    alt: "Internasional 3",
    date: "29 Mei 2026",
    title: "Perkembangan Robotika Medis Mengubah Wajah Kedokteran Modern",
  },
];

export default function BeritaInternasional() {
  return (
    <section>
      <div className="flex items-center justify-between border-b border-[#424752] pb-2 mb-6">
        <h2 className="font-[family-name:var(--font-chivo)] text-2xl font-bold text-[#acc7ff] uppercase tracking-tight">
          Berita Internasional
        </h2>
        <Link
          href="#"
          className="font-[family-name:var(--font-hanken)] text-sm text-[#8c909e] hover:text-[#acc7ff] transition-colors"
        >
          Lihat Semua
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {articles.map((article) => (
          <article key={article.title} className="group">
            <div className="aspect-[4/3] mb-3 overflow-hidden rounded-sm bg-[#1f1f25]">
              <Image
                src={article.img}
                alt={article.alt}
                width={400}
                height={300}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                unoptimized
              />
            </div>
            <p className="text-[10px] text-[#8c909e] uppercase mb-1">
              {article.date}
            </p>
            <h4 className="font-[family-name:var(--font-hanken)] font-semibold text-white mb-2 leading-tight group-hover:text-[#acc7ff] transition-colors">
              {article.title}
            </h4>
          </article>
        ))}
      </div>
    </section>
  );
}
