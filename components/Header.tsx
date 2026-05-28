"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const LOGO_URL =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDUm4ZHi2QOL1uqiVPPOgfA9t6sJChfEUEMgwmi0IqnR3XE4EStHLw10ncX6OYut6j6GCz7fWsdrDtPy-dDK7TaqKrTf5iEEx4IEHybPZlzaPaM_P7_rJGPvQ9okGHLZgsNI9rISM9t_Z3RF-phpb4GY__LMpsQZUmhu4v0wUMpH1NIaEbATcGdvwGFGeWfb6u5x-4w1V79ueEkO4MOtJAY4qO2p-IiFqor6Gfvweke9VwgWZm5LvokmZGI5J9vDYGjE8rXhu2FKtn1";

const navLinks = [
  { label: "BERANDA", href: "#", active: true },
  { label: "BERITA DAERAH", href: "#", hasDropdown: true },
  { label: "LINTAS BERITA", href: "#", hasDropdown: true },
  { label: "LIPSUS", href: "#" },
  { label: "OPINI", href: "#" },
];

export default function Header() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <>
      <header className="bg-[#131318] border-b border-[#424752] sticky top-0 z-40">
        <div className="flex justify-between items-center h-16 md:h-20 px-4 md:px-6 w-full max-w-[1280px] mx-auto gap-4">
          {/* Logo + Desktop Nav */}
          <div className="flex items-center gap-8 grow min-w-0">
            <Link href="/" className="shrink-0">
              <Image
                src={LOGO_URL}
                alt="NTB Satu News"
                width={120}
                height={40}
                className="h-9 md:h-11 w-auto"
                unoptimized
              />
            </Link>
            <nav className="hidden xl:flex items-center gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`font-[family-name:var(--font-hanken)] text-sm font-semibold transition-colors duration-200 flex items-center gap-1 ${
                    link.active
                      ? "text-[#acc7ff] border-b-2 border-[#acc7ff] pb-1"
                      : "text-[#c2c6d4] hover:text-[#d7e2ff]"
                  }`}
                >
                  {link.label}
                  {link.hasDropdown && (
                    <span className="material-symbols-outlined text-sm">
                      keyboard_arrow_down
                    </span>
                  )}
                </Link>
              ))}
            </nav>
          </div>

          {/* Right Controls */}
          <div className="flex items-center gap-1 md:gap-3 shrink-0">
            <div className="relative hidden sm:block">
              <input
                className="bg-[#2a292f] border border-[#424752] text-[#e4e1e9] rounded-full pl-10 pr-4 py-1.5 text-sm focus:ring-1 focus:ring-[#acc7ff] w-44 md:w-64 outline-none"
                placeholder="Cari berita..."
                type="text"
              />
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[#c2c6d4] text-lg">
                search
              </span>
            </div>

            {/* Mobile search icon (visible when input is hidden) */}
            <button className="sm:hidden p-2 text-[#c2c6d4] hover:text-[#acc7ff] transition-colors rounded-full hover:bg-[#35343a]">
              <span className="material-symbols-outlined">search</span>
            </button>

            <button
              className="p-2 text-[#c2c6d4] hover:text-[#acc7ff] transition-colors flex items-center justify-center rounded-full hover:bg-[#35343a]"
              title="Ganti Tema"
            >
              <span className="material-symbols-outlined">light_mode</span>
            </button>

            <button
              className="xl:hidden p-2 text-[#c2c6d4] hover:text-[#acc7ff] transition-colors rounded-full hover:bg-[#35343a]"
              onClick={() => setDrawerOpen(true)}
              aria-label="Buka menu"
            >
              <span className="material-symbols-outlined">menu</span>
            </button>
          </div>
        </div>
      </header>

      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-50 bg-black/60 backdrop-blur-sm transition-opacity duration-300 xl:hidden ${
          drawerOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setDrawerOpen(false)}
      />

      {/* Drawer */}
      <aside
        className={`fixed top-0 right-0 z-50 h-full w-72 bg-[#1b1b20] border-l border-[#424752] flex flex-col shadow-2xl transition-transform duration-300 ease-in-out xl:hidden ${
          drawerOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-[#424752]">
          <Image
            src={LOGO_URL}
            alt="NTB Satu News"
            width={100}
            height={34}
            className="h-8 w-auto"
            unoptimized
          />
          <button
            onClick={() => setDrawerOpen(false)}
            className="p-2 text-[#c2c6d4] hover:text-[#acc7ff] transition-colors rounded-full hover:bg-[#35343a]"
            aria-label="Tutup menu"
          >
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        {/* Mobile Search */}
        <div className="px-5 py-4 border-b border-[#424752]">
          <div className="relative">
            <input
              className="w-full bg-[#2a292f] border border-[#424752] text-[#e4e1e9] rounded-full pl-10 pr-4 py-2 text-sm focus:ring-1 focus:ring-[#acc7ff] outline-none"
              placeholder="Cari berita..."
              type="text"
            />
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[#c2c6d4] text-lg">
              search
            </span>
          </div>
        </div>

        {/* Nav Links */}
        <nav className="flex flex-col py-2 grow overflow-y-auto">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setDrawerOpen(false)}
              className={`flex items-center justify-between px-5 py-3.5 font-[family-name:var(--font-hanken)] text-sm font-semibold transition-colors border-l-2 ${
                link.active
                  ? "text-[#acc7ff] border-[#acc7ff] bg-[#acc7ff]/5"
                  : "text-[#c2c6d4] border-transparent hover:text-[#acc7ff] hover:bg-[#35343a] hover:border-[#acc7ff]/40"
              }`}
            >
              {link.label}
              {link.hasDropdown && (
                <span className="material-symbols-outlined text-base opacity-60">
                  chevron_right
                </span>
              )}
            </Link>
          ))}
        </nav>

        {/* Drawer Footer */}
        <div className="px-5 py-4 border-t border-[#424752]">
          <p className="text-[10px] text-[#8c909e] uppercase tracking-widest">
            © 2026 NTB Satu News
          </p>
        </div>
      </aside>
    </>
  );
}
