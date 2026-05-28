import Image from "next/image";

const HERO_IMG =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCq8Um7RBXH4QIpBYp_Kew3wIPeemh828lylqVX1cOsI1_6iELHBZuvNNZmKnItj3H99njnov9ig1kKMAntiJE_eW5SnzAYwWKHdoCyn4o-c3Bbvce3VEGM008pkILDn4TdjwjtCn1Sh7epN7vjROAKhNm3-YjGKWwE368i934DpbnZmaGxS6063VjA8ioZNB1uibC8dfwHd8oPxOAaepmQQ6OBr2Ol6DqJ_X8ks52y44uUTDwpg4kU4EhaMkJgyLp3MPky8dLr7JBH";

export default function HeroSection() {
  return (
    <section className="mb-8 md:mb-12">
      <div className="relative w-full aspect-[4/3] sm:aspect-[16/9] md:aspect-[21/9] bg-[#1f1f25] overflow-hidden rounded-lg group">
        <Image
          src={HERO_IMG}
          alt="Renaisans Digital"
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          priority
          unoptimized
        />

        {/* Stronger gradient on mobile so text is always readable */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/10 md:via-black/40 md:to-transparent" />

        <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 md:p-16 md:right-auto md:max-w-3xl">
          <div className="inline-block bg-[#0056b3] text-white font-[family-name:var(--font-hanken)] font-semibold px-2.5 py-0.5 mb-2 md:mb-4 uppercase tracking-wider text-xs md:text-sm">
            Berita Utama
          </div>

          <h1 className="font-[family-name:var(--font-chivo)] text-xl sm:text-2xl md:text-5xl font-bold text-white mb-2 md:mb-4 leading-tight">
            Renaisans Digital: Bagaimana AI Membentuk Ulang Kreativitas Global
          </h1>

          {/* Hidden on mobile, visible from md up */}
          <p className="hidden md:block font-[family-name:var(--font-newsreader)] text-[#dde3eb] mb-6 text-lg">
            Dalam pergeseran yang belum pernah terjadi sebelumnya, industri
            kreatif mengalami lonjakan output seiring model generatif menjadi
            standar bagi para seniman dan desainer.
          </p>

          <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
            <span className="font-[family-name:var(--font-hanken)] text-xs md:text-sm font-semibold text-[#acc7ff]">
              Oleh Marcus Vane
            </span>
            <span className="text-[#424752] hidden sm:inline">•</span>
            <span className="font-[family-name:var(--font-hanken)] text-xs md:text-sm text-[#8c909e]">
              12 Menit Lalu • 29 Mei 2026
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
