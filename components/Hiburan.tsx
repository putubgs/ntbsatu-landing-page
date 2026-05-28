import Image from "next/image";
import Link from "next/link";

const IMG1 =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBqlsmRVTIut0hNqhDvK2sCvWpZZk8rQu0IniZdbyLXyqlhggEdE0n1REG6wkulIqVI_hvp9Dv6Zslmx1JBCAEx9w1t_gqsTX12S8t7aq2Qghds6uU4sKtlxiIlrAjbIIUAcFR3WxyBv1Am04Bswna1B3DvEHBm4qWXRjcu3cGNA77Txx9VyyC0WaaX4gfU06iOvAzwyqw897aOsEtesgPanDm9LKsnAd9-dG2IpOW3z66em82MyH-HltL0XNYSDcIGvv2D-U3tknJw";
const IMG2 =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCq8Um7RBXH4QIpBYp_Kew3wIPeemh828lylqVX1cOsI1_6iELHBZuvNNZmKnItj3H99njnov9ig1kKMAntiJE_eW5SnzAYwWKHdoCyn4o-c3Bbvce3VEGM008pkILDn4TdjwjtCn1Sh7epN7vjROAKhNm3-YjGKWwE368i934DpbnZmaGxS6063VjA8ioZNB1uibC8dfwHd8oPxOAaepmQQ6OBr2Ol6DqJ_X8ks52y44uUTDwpg4kU4EhaMkJgyLp3MPky8dLr7JBH";

const articles = [
  {
    img: IMG1,
    alt: "Hiburan 1",
    category: "Film",
    date: "29 Mei 2026",
    title: "Ulasan Film Terbaru: Mahakarya Sinematik yang Mengharukan",
    excerpt:
      "Sebuah perjalanan visual yang mendefinisikan ulang genre drama keluarga tahun ini.",
  },
  {
    img: IMG2,
    alt: "Hiburan 2",
    category: "Musik",
    date: "28 Mei 2026",
    title: "Konser Tur Dunia Musisi Lokal Sukses Guncang Jakarta",
    excerpt:
      "Tiket ludes terjual dalam hitungan menit, antusiasme penggemar luar biasa.",
  },
];

export default function Hiburan() {
  return (
    <section>
      <div className="flex items-center justify-between border-b border-[#424752] pb-2 mb-6">
        <h2 className="font-[family-name:var(--font-chivo)] text-2xl font-bold text-[#acc7ff] uppercase tracking-tight">
          Hiburan
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
          <article key={article.title} className="flex gap-4 group">
            <div className="w-40 aspect-square overflow-hidden rounded-sm shrink-0 bg-[#1f1f25]">
              <Image
                src={article.img}
                alt={article.alt}
                width={160}
                height={160}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                unoptimized
              />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="font-[family-name:var(--font-hanken)] text-xs font-semibold text-[#acc7ff] uppercase">
                  {article.category}
                </span>
                <span className="text-[#8c909e] text-xs">•</span>
                <span className="font-[family-name:var(--font-hanken)] text-xs text-[#8c909e]">
                  {article.date}
                </span>
              </div>
              <h4 className="font-[family-name:var(--font-chivo)] text-lg font-bold text-white group-hover:text-[#acc7ff] transition-colors leading-tight">
                {article.title}
              </h4>
              <p className="font-[family-name:var(--font-newsreader)] text-sm text-[#8c909e] line-clamp-2 mt-2">
                {article.excerpt}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
