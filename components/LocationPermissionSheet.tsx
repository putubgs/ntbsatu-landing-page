"use client";

import { useState, useEffect } from "react";

type LocationState = "idle" | "requesting" | "granted" | "denied";

interface LocationData {
  latitude: number;
  longitude: number;
  accuracy: number;
  city?: string;
}

async function reverseGeocode(lat: number, lon: number): Promise<string> {
  try {
    const res = await fetch(
      `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lon}&format=json`,
      { headers: { "Accept-Language": "id" } }
    );
    const data = await res.json();
    return (
      data.address?.city ||
      data.address?.town ||
      data.address?.county ||
      data.address?.state ||
      "Lokasi Anda"
    );
  } catch {
    return "Lokasi Anda";
  }
}

export default function LocationPermissionSheet() {
  const [visible, setVisible] = useState(false);
  const [animateIn, setAnimateIn] = useState(false);
  const [state, setState] = useState<LocationState>("idle");
  const [location, setLocation] = useState<LocationData | null>(null);

  // Show sheet on first mount
  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
      requestAnimationFrame(() => setAnimateIn(true));
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  // Lock body scroll while sheet is open
  useEffect(() => {
    if (visible) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [visible]);

  const dismiss = () => {
    setAnimateIn(false);
    setTimeout(() => setVisible(false), 350);
  };

  const handleDeny = () => {
    setState("denied");
    setTimeout(dismiss, 1200);
  };

  const handleAllow = () => {
    setState("requesting");
    navigator.geolocation.getCurrentPosition(
      async (pos) => {
        const { latitude, longitude, accuracy } = pos.coords;
        const city = await reverseGeocode(latitude, longitude);
        setLocation({ latitude, longitude, accuracy, city });
        setState("granted");
        setTimeout(dismiss, 2000);
      },
      () => {
        setState("denied");
        setTimeout(dismiss, 1200);
      },
      { enableHighAccuracy: true, timeout: 10000 }
    );
  };

  if (!visible) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-50 bg-black/50 backdrop-blur-sm transition-opacity duration-350 ${
          animateIn ? "opacity-100" : "opacity-0"
        }`}
        onClick={state === "requesting" ? undefined : handleDeny}
      />

      {/* Bottom Sheet — half page height */}
      <div
        className={`fixed bottom-0 left-0 right-0 z-50 h-1/2 bg-[#1b1b20] border-t border-[#424752] rounded-t-2xl flex flex-col shadow-2xl transition-transform duration-350 ease-out ${
          animateIn ? "translate-y-0" : "translate-y-full"
        }`}
      >
        {/* Drag handle */}
        <div className="flex justify-center pt-3 pb-1 shrink-0">
          <div className="w-10 h-1 rounded-full bg-[#424752]" />
        </div>

        {/* Content */}
        <div className="flex flex-col items-center justify-center flex-1 px-6 text-center gap-4 overflow-hidden">

          {/* Idle / default state */}
          {(state === "idle" || state === "requesting") && (
            <>
              <div className="relative">
                <div className="w-16 h-16 rounded-full bg-[#0056b3]/20 flex items-center justify-center">
                  <span className="material-symbols-outlined text-4xl text-[#acc7ff]">
                    location_on
                  </span>
                </div>
                {state === "requesting" && (
                  <div className="absolute inset-0 rounded-full border-2 border-[#acc7ff] border-t-transparent animate-spin" />
                )}
              </div>

              <div>
                <h2 className="font-[family-name:var(--font-chivo)] text-xl font-bold text-white mb-1">
                  {state === "requesting"
                    ? "Mendeteksi lokasi..."
                    : "Aktifkan Lokasi Anda"}
                </h2>
                <p className="font-[family-name:var(--font-newsreader)] text-[#c2c6d4] text-sm leading-relaxed max-w-sm mx-auto">
                  {state === "requesting"
                    ? "Mohon izinkan akses lokasi di popup browser Anda."
                    : "Dapatkan berita terkini dari daerah Anda — cuaca lokal, kejadian sekitar, dan konten yang relevan untuk Anda."}
                </p>
              </div>

              {state === "idle" && (
                <div className="flex flex-col sm:flex-row gap-3 w-full max-w-sm">
                  <button
                    onClick={handleDeny}
                    className="flex-1 py-2.5 rounded-lg border border-[#424752] font-[family-name:var(--font-hanken)] text-sm font-semibold text-[#c2c6d4] hover:bg-[#35343a] transition-colors"
                  >
                    Lewati
                  </button>
                  <button
                    onClick={handleAllow}
                    className="flex-1 py-2.5 rounded-lg bg-[#0056b3] font-[family-name:var(--font-hanken)] text-sm font-semibold text-white hover:bg-[#0066cc] transition-colors flex items-center justify-center gap-2"
                  >
                    <span className="material-symbols-outlined text-base">
                      my_location
                    </span>
                    Gunakan Lokasi Saya
                  </button>
                </div>
              )}

              {state === "idle" && (
                <p className="text-[10px] text-[#8c909e] flex items-center gap-1">
                  <span className="material-symbols-outlined text-xs">lock</span>
                  Lokasi Anda tidak disimpan atau dibagikan ke pihak ketiga
                </p>
              )}
            </>
          )}

          {/* Granted state */}
          {state === "granted" && location && (
            <>
              <div className="w-16 h-16 rounded-full bg-green-500/15 flex items-center justify-center">
                <span className="material-symbols-outlined text-4xl text-green-400">
                  check_circle
                </span>
              </div>
              <div>
                <h2 className="font-[family-name:var(--font-chivo)] text-xl font-bold text-white mb-1">
                  Lokasi Ditemukan!
                </h2>
                <p className="font-[family-name:var(--font-hanken)] text-lg font-semibold text-[#acc7ff]">
                  {location.city}
                </p>
                <p className="font-[family-name:var(--font-newsreader)] text-[#8c909e] text-xs mt-1">
                  {location.latitude.toFixed(4)}, {location.longitude.toFixed(4)}{" "}
                  · akurasi ±{Math.round(location.accuracy)}m
                </p>
              </div>
              <p className="font-[family-name:var(--font-newsreader)] text-[#c2c6d4] text-sm">
                Menampilkan berita dari sekitar <strong className="text-white">{location.city}</strong> untuk Anda.
              </p>
            </>
          )}

          {/* Denied state */}
          {state === "denied" && (
            <>
              <div className="w-16 h-16 rounded-full bg-[#424752]/40 flex items-center justify-center">
                <span className="material-symbols-outlined text-4xl text-[#8c909e]">
                  location_off
                </span>
              </div>
              <div>
                <h2 className="font-[family-name:var(--font-chivo)] text-xl font-bold text-white mb-1">
                  Lokasi Dinonaktifkan
                </h2>
                <p className="font-[family-name:var(--font-newsreader)] text-[#c2c6d4] text-sm">
                  Tidak masalah. Anda bisa mengaktifkannya kapan saja melalui pengaturan browser.
                </p>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}