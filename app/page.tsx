"use client"

import NewsTicker from "@/components/NewsTicker";
import Header from "@/components/Header";
import WeatherDateWidget from "@/components/WeatherDateWidget";
import HeroSection from "@/components/HeroSection";
import BeritaTerkini from "@/components/BeritaTerkini";
import BeritaNasional from "@/components/BeritaNasional";
import YoutubeSection from "@/components/YoutubeSection";
import BeritaInternasional from "@/components/BeritaInternasional";
import Hiburan from "@/components/Hiburan";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";
import FAB from "@/components/FAB";
// import LocationPermissionSheet from "@/components/LocationPermissionSheet";

import dynamic from "next/dynamic";

const LocationPermissionSheet = dynamic(
  () => import("@/components/LocationPermissionSheet"),
  { ssr: false }, // ← ini kuncinya, skip SSR entirely
);

export default function Home() {
  return (
    <>
      <LocationPermissionSheet />
      <NewsTicker />
      <Header />

      <main className="max-w-[1280px] mx-auto px-6 py-2 lg:py-8">
        <WeatherDateWidget />
        <HeroSection />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left Column */}
          <div className="lg:col-span-8 space-y-12">
            <BeritaTerkini />

            {/* Mid-page ad */}
            <div className="w-full py-4">
              <div className="w-full max-w-[728px] h-[90px] mx-auto bg-[#35343a] border border-[#424752] flex items-center justify-center text-[#424752] font-[family-name:var(--font-hanken)] uppercase tracking-widest overflow-hidden">
                <span className="opacity-40 text-center px-4 italic">
                  Iklan 728x90
                </span>
              </div>
            </div>

            <BeritaNasional />
            <YoutubeSection />
            <BeritaInternasional />
            <Hiburan />
          </div>

          {/* Sidebar */}
          <Sidebar />
        </div>
      </main>

      <Footer />
      {/* <FAB /> */}
    </>
  );
}
