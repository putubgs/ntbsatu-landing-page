import Image from "next/image";
import Link from "next/link";

const IMG1 =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDxxxahB-uuGRiLCkv2HcDEoKTdKcvNFKKWYdTYGMNDOVHwzIPEhDrE9oA7LaGRShk1rELP_ebxFOO7TV0uwBoWqog7c8WMiY4h-9aXHSn8cwMasdoW-rxqAR1e2rYndkgCLJhS6d9JFp_W8F4q3t3b8fO0mu0Tntv0DtquFzi66DWK4zV7hs14wJeTfBBOe3QJqn6BHZt1MNHW4_ibbvKwzewMY5vF4wsfXxP9BU4KgFfKYmugVKGoi4OElMaRYLmBR-DdTYYgsROA";

const IMG2 =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAxw7SdeUX54LNW8tGWsWDQIAE5gW8oWcoHu-TdlbITZlOi5Ex4mglEhRIlHPeoFKuXuJKin747uLwpdXcmPl6oEO0yiJ2FITVaao9gvrvz9gH9HCCzztGDBgKjqfcmMOj63bIdfPXRz-6KT2r1UJBxWp6O_SL4gWglT4bfzCknEv-kYiWNVGgbS5kWjKNsI_56ZJAnPINo4lC8UFNxWcVaDY2S4O4OTufg7eMwS3PQbG9czpVexVnCPzVZ8BWSCzm6UeKFFFbwq2kK";

const articles = [
  {
    img: IMG1,
    alt: "Nasional 1",
    category: "Ekonomi",
    date: "29 Mei 2026",
    title: "Presiden Resmikan Kawasan Ekonomi Khusus Baru di Kalimantan",
    excerpt:
      "Fokus pada hilirisasi industri mineral untuk memperkuat ketahanan ekonomi nasional di masa depan.",
  },
  {
    img: IMG2,
    alt: "Nasional 2",
    category: "Pendidikan",
    date: "29 Mei 2026",
    title: "Reformasi Pendidikan: Kurikulum Digital Mulai Diterapkan di Pelosok",
    excerpt:
      "Pemerintah menjamin akses internet merata untuk mendukung digitalisasi sekolah di seluruh nusantara.",
  },
];

export default function BeritaNasional() {
  return (
    <section>
      <div className="flex items-center justify-between border-b border-[#424752] pb-2 mb-6">
        <h2 className="font-[family-name:var(--font-chivo)] text-2xl font-bold text-[#acc7ff] uppercase tracking-tight">
          Berita Nasional
        </h2>
        <Link
          href="#"
          className="font-[family-name:var(--font-hanken)] text-sm text-[#8c909e] hover:text-[#acc7ff] transition-colors"
        >
          Lihat Semua
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {articles.map((article) => (
          <article key={article.title} className="group">
            <div className="aspect-video mb-4 overflow-hidden rounded-sm bg-[#1f1f25]">
              <Image
                src={article.img}
                alt={article.alt}
                width={600}
                height={338}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                unoptimized
              />
            </div>
            <div className="flex items-center gap-2 mb-1">
              <span className="font-[family-name:var(--font-hanken)] text-xs font-semibold text-[#acc7ff] uppercase tracking-tighter">
                {article.category}
              </span>
              <span className="text-[#8c909e] text-xs">•</span>
              <span className="font-[family-name:var(--font-hanken)] text-xs text-[#8c909e]">
                {article.date}
              </span>
            </div>
            <h4 className="font-[family-name:var(--font-chivo)] text-xl font-bold text-white mb-2 leading-tight group-hover:text-[#acc7ff] transition-colors">
              {article.title}
            </h4>
            <p className="font-[family-name:var(--font-newsreader)] text-[#c2c6d4] line-clamp-2">
              {article.excerpt}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
