import Image from "next/image";
import Link from "next/link";

const IMG1 =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBqlsmRVTIut0hNqhDvK2sCvWpZZk8rQu0IniZdbyLXyqlhggEdE0n1REG6wkulIqVI_hvp9Dv6Zslmx1JBCAEx9w1t_gqsTX12S8t7aq2Qghds6uU4sKtlxiIlrAjbIIUAcFR3WxyBv1Am04Bswna1B3DvEHBm4qWXRjcu3cGNA77Txx9VyyC0WaaX4gfU06iOvAzwyqw897aOsEtesgPanDm9LKsnAd9-dG2IpOW3z66em82MyH-HltL0XNYSDcIGvv2D-U3tknJw";

const IMG2 =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuARbw3vIhpwhflGdwWsI_LWP8E6qBV6mSUAr3FAX35pJO2Q4eHoqreqCMdPmR69mziG7KDmRkAoz9H5yRVSkGTHSXA357kmBoXL-aVHBw3QZx8-p_MmFSeEg50DlXL2OhY4HDWNYhfDUsw90r1IMRIYYy7jUwCR56gh9HWooq_z6UYjiNRCWCIQ-xWqoHmQhYKXgDn4KPuRZPCKi7UTPXTg8xsoYHWmzdoVtaOlwXLFy0j6ffMwrfo50PvWNPgw2xuafkjxwG49Hzf7";

const IMG3 =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDPK5qYBGGf5l86wXKt-EsK79FLPaVUlloD9976zphtrbZd3ssUIB31cBn5ydPzE5kh6yLcEv-scPHdyXgON4d0roxKXah4PCq0FqHBygFH77nX0XLtjDPTiOhmWKXk8EG4d6UDNGDbkuIY9y9bl1hilomboJfUE2fvyQ_n5t_kryj5Eu1QhdR-RoxjeizZn10He8NQ9KlIO8Lace5zaNzmFm7URLTcnbFlcLn8Y-M3no4HN0gv_sknj4dHrISJdw-xwOcqoTubbh8u";

const sideArticles = [
  {
    img: IMG2,
    alt: "Energi Hijau",
    category: "Teknologi",
    date: "29 Mei 2026",
    title: "PLN NTB Optimalkan Energi Terbarukan Melalui Panel Surya Terapung",
    time: "10 Menit Lalu.",
  },
  {
    img: IMG3,
    alt: "Pariwisata NTB",
    category: "Wisata",
    date: "29 Mei 2026",
    title: "Desa Wisata Sembalun Masuk Nominasi Destinasi Terbaik Dunia",
    time: "30 Menit Lalu.",
  },
];

export default function BeritaTerkini() {
  return (
    <section>
      <div className="flex items-center justify-between border-b border-[#424752] pb-2 mb-6">
        <h2 className="font-[family-name:var(--font-chivo)] text-2xl font-bold text-[#acc7ff] uppercase tracking-tight">
          Berita Terkini
        </h2>
        <Link
          href="#"
          className="font-[family-name:var(--font-hanken)] text-sm text-[#8c909e] hover:text-[#acc7ff] transition-colors"
        >
          Lihat Semua
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Featured article */}
        <article className="bg-[#1f1f25] border border-[#424752] p-6 hover:bg-[#2a292f] transition-colors group">
          <div className="aspect-video mb-4 overflow-hidden rounded-sm">
            <Image
              src={IMG1}
              alt="Update Lokal"
              width={600}
              height={338}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              unoptimized
            />
          </div>
          <span className="font-[family-name:var(--font-hanken)] text-sm font-semibold text-[#acc7ff] mb-2 block uppercase">
            Politik • 29 Mei 2026
          </span>
          <h3 className="font-[family-name:var(--font-chivo)] text-xl font-bold text-white mb-2 leading-tight">
            Gubernur NTB Tinjau Proyek Infrastruktur Strategis di Lombok Tengah
          </h3>
          <p className="font-[family-name:var(--font-newsreader)] text-[#c2c6d4] line-clamp-2">
            Langkah percepatan pembangunan dilakukan guna menyambut event
            internasional mendatang dengan standar kualitas global.
          </p>
        </article>

        {/* Side articles */}
        <div className="space-y-6">
          {sideArticles.map((article) => (
            <article key={article.title} className="flex gap-4 group">
              <div className="w-24 h-24 shrink-0 overflow-hidden bg-[#1f1f25] border border-[#424752]">
                <Image
                  src={article.img}
                  alt={article.alt}
                  width={96}
                  height={96}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  unoptimized
                />
              </div>
              <div>
                <span className="font-[family-name:var(--font-hanken)] text-xs font-semibold text-[#acc7ff] uppercase mb-1 block">
                  {article.category} • {article.date}
                </span>
                <h4 className="font-[family-name:var(--font-hanken)] font-semibold text-white leading-snug group-hover:text-[#acc7ff] transition-colors">
                  {article.title}
                </h4>
                <p className="font-[family-name:var(--font-hanken)] text-xs text-[#8c909e] mt-1">
                  {article.time}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
