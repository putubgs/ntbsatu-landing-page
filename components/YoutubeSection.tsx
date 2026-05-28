import Image from "next/image";

const IMG1 =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDxVCOLLQvrP3f8caaQsgnZjPH24fcH0fLImP0Uox5Bu4mRz9ZMeF2atZR3pyErr10UorBuJjYh49mFPZtEQyIkeMIDDIHu35bnxtge_IJ9qiQ35RaUArCdoadz4bRZpQVjLgUAp7QKT2R7hfaa4ZwNA7010p0Vjjryqd6F30xUjAus2Sb9Ak7Nw2DCjknkK3JeCkZ4q-edrBTlmWa02HpaTz4liOGd1zbyKPCZOywUY72dT5w1ufGY4GlG3ssk6lm39yBGOyK2NSKh";

const IMG2 =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuARbw3vIhpwhflGdwWsI_LWP8E6qBV6mSUAr3FAX35pJO2Q4eHoqreqCMdPmR69mziG7KDmRkAoz9H5yRVSkGTHSXA357kmBoXL-aVHBw3QZx8-p_MmFSeEg50DlXL2OhY4HDWNYhfDUsw90r1IMRIYYy7jUwCR56gh9HWooq_z6UYjiNRCWCIQ-xWqoHmQhYKXgDn4KPuRZPCKi7UTPXTg8xsoYHWmzdoVtaOlwXLFy0j6ffMwrfo50PvWNPgw2xuafkjxwG49Hzf7";

const sideVideos = [
  {
    img: IMG1,
    duration: "04:30",
    title: "Highlight MotoGP Mandalika: Persiapan Sirkuit Terkini",
    date: "29 Mei 2026",
    views: "2rb",
  },
  {
    img: IMG2,
    duration: "12:15",
    title: "Vlog: Menjelajah Hidden Gem di Pulau Sumbawa",
    date: "27 Mei 2026",
    views: "5rb",
  },
];

export default function YoutubeSection() {
  return (
    <section className="bg-[#1b1b20] p-6 rounded-lg border border-[#424752]">
      <div className="flex items-center gap-2 mb-6">
        <span className="material-symbols-outlined text-red-600 text-3xl">
          play_circle
        </span>
        <h2 className="font-[family-name:var(--font-chivo)] text-2xl font-bold text-white uppercase tracking-tight">
          NTBSatu Youtube
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Main video */}
        <div className="relative aspect-video bg-black rounded-sm overflow-hidden flex items-center justify-center border border-[#424752]">
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-4">
            <h4 className="text-white font-[family-name:var(--font-hanken)] font-semibold line-clamp-2">
              Eksklusif: Wawancara Mendalam Tokoh Perubahan NTB 2026
            </h4>
            <div className="flex items-center gap-2 mt-1">
              <span className="text-[#acc7ff] text-[10px] uppercase">
                Video Utama
              </span>
              <span className="text-[#8c909e] text-[10px]">•</span>
              <span className="text-[#8c909e] text-[10px]">29 Mei 2026</span>
            </div>
          </div>
          <span className="material-symbols-outlined text-6xl text-white opacity-80">
            play_arrow
          </span>
        </div>

        {/* Side videos */}
        <div className="space-y-4">
          {sideVideos.map((video) => (
            <div key={video.title} className="flex gap-4 group cursor-pointer">
              <div className="w-32 aspect-video bg-[#1f1f25] overflow-hidden rounded-sm shrink-0 relative">
                <span className="absolute bottom-1 right-1 bg-black/80 text-[10px] px-1 text-white z-10">
                  {video.duration}
                </span>
                <Image
                  src={video.img}
                  alt={video.title}
                  width={128}
                  height={72}
                  className="w-full h-full object-cover"
                  unoptimized
                />
              </div>
              <div>
                <h5 className="text-white font-[family-name:var(--font-hanken)] font-semibold group-hover:text-[#acc7ff] transition-colors line-clamp-2">
                  {video.title}
                </h5>
                <p className="text-[#8c909e] text-[10px] mt-1">
                  {video.date} • {video.views}x ditonton
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
