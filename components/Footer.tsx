import Image from "next/image";
import Link from "next/link";

const LOGO_URL =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDUm4ZHi2QOL1uqiVPPOgfA9t6sJChfEUEMgwmi0IqnR3XE4EStHLw10ncX6OYut6j6GCz7fWsdrDtPy-dDK7TaqKrTf5iEEx4IEHybPZlzaPaM_P7_rJGPvQ9okGHLZgsNI9rISM9t_Z3RF-phpb4GY__LMpsQZUmhu4v0wUMpH1NIaEbATcGdvwGFGeWfb6u5x-4w1V79ueEkO4MOtJAY4qO2p-IiFqor6Gfvweke9VwgWZm5LvokmZGI5J9vDYGjE8rXhu2FKtn1";

export default function Footer() {
  return (
    <footer className="bg-[#0e0e13] border-t border-[#424752]">
      <div className="max-w-[1280px] mx-auto px-6 py-12 md:py-16 grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
        {/* Brand */}
        <div className="flex flex-col gap-4">
          <Image
            src={LOGO_URL}
            alt="Logo NTB Satu"
            width={160}
            height={80}
            className="h-20 w-auto object-contain self-start"
            unoptimized
          />
          <p className="font-[family-name:var(--font-newsreader)] text-[#c2c6d4] max-w-sm">
            Era Baru Jurnalisme. Berita global dengan presisi lokal.
          </p>
        </div>

        {/* Company Details */}
        <div className="space-y-6">
          <h3 className="font-[family-name:var(--font-chivo)] text-xl font-bold text-white">
            PT MEDIA NTB SATU
          </h3>
          <div className="font-[family-name:var(--font-newsreader)] text-[#c2c6d4] space-y-3">
            <p>
              Jalan Pelita No. 9G Lingkungan Karang Taruna, Mataram Barat, Kota
              Mataram, Nusa Tenggara Barat, 83126
            </p>
            <p>
              Email:{" "}
              <Link
                href="mailto:ntbsatudotcom@gmail.com"
                className="text-[#acc7ff] hover:underline"
              >
                ntbsatudotcom@gmail.com
              </Link>
            </p>
            <p>Telp. +62 856 0405 6457</p>
          </div>
        </div>

        {/* Social Media */}
        <div>
          <div className="relative inline-block mb-8">
            <h3 className="font-[family-name:var(--font-hanken)] font-semibold text-white">
              Media Sosial
            </h3>
            <div className="absolute -bottom-2 left-0 w-8 h-1 bg-white" />
          </div>
          <div className="flex gap-3">
            {/* Facebook */}
            <Link
              href="#"
              className="w-10 h-10 bg-[#3b5998] flex items-center justify-center rounded-sm hover:opacity-80 transition-opacity"
            >
              <svg className="w-6 h-6 text-white fill-current" viewBox="0 0 24 24">
                <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
              </svg>
            </Link>
            {/* YouTube */}
            <Link
              href="#"
              className="w-10 h-10 bg-[#FF0000] flex items-center justify-center rounded-sm hover:opacity-80 transition-opacity"
            >
              <svg className="w-6 h-6 text-white fill-current" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </Link>
            {/* Instagram */}
            <Link
              href="#"
              className="w-10 h-10 bg-[#C13584] flex items-center justify-center rounded-sm hover:opacity-80 transition-opacity"
            >
              <svg className="w-6 h-6 text-white fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </Link>
            {/* TikTok */}
            <Link
              href="#"
              className="w-10 h-10 bg-[#ff0050] flex items-center justify-center rounded-sm hover:opacity-80 transition-opacity"
            >
              <svg className="w-6 h-6 text-white fill-current" viewBox="0 0 24 24">
                <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.59-5.71-.29-2.63.85-5.21 2.86-6.88 1.43-1.22 3.32-1.84 5.19-1.7 0 1.44-.01 2.89-.01 4.33-.8-.16-1.66-.01-2.39.38-.94.49-1.57 1.47-1.72 2.51-.15 1.04.14 2.12.79 2.95.66.86 1.73 1.39 2.8 1.39 1.13.06 2.27-.41 3.03-1.22.79-.81 1.19-1.95 1.2-3.08-.02-3.64-.01-7.29-.01-10.93z" />
              </svg>
            </Link>
          </div>
        </div>
      </div>

      <div className="border-t border-[#424752] py-6 text-center">
        <p className="font-[family-name:var(--font-hanken)] text-sm text-[#8c909e]">
          © 2026 NTB Satu News. Seluruh hak cipta dilindungi undang-undang.
        </p>
      </div>
    </footer>
  );
}
