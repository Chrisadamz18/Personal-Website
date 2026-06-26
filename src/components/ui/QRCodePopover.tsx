"use client";

import { useState, useRef, useEffect } from "react";

export function QRCodePopover() {
  const [isOpen, setIsOpen] = useState(false);
  const popoverRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (popoverRef.current && !popoverRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={popoverRef} className="relative inline-block text-left">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex items-center gap-1.5 rounded-full border border-[var(--border)] bg-[var(--background)] px-4 py-2 text-xs font-bold text-[var(--foreground)] hover:border-[var(--accent)]/40 hover:text-[var(--accent)] transition-all cursor-pointer"
      >
        <svg
          className="w-3.5 h-3.5 text-[var(--accent)]"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 013.75 9.375v-4.5zM3.75 14.625c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5a1.125 1.125 0 01-1.125-1.125v-4.5zM13.875 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5a1.125 1.125 0 01-1.125-1.125v-4.5zM15 15h.008v.008H15V15zm0 2.25h.008v.008H15v-.008zm2.25-2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-2.25h.008v.008H19.5V15zm0 2.25h.008v.008H19.5v-.008zM15 19.5h.008v.008H15v-.008zm2.25 0h.008v.008h-.008v-.008z" />
        </svg>
        Scan QR Code
      </button>

      {isOpen && (
        <div className="absolute left-0 z-50 mt-3 w-56 origin-top-left rounded-2xl border border-[var(--border)] bg-[var(--card)] p-4 shadow-2xl ring-1 ring-black/5 animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="text-center">
            <p className="text-xs font-bold text-[var(--foreground)] mb-3">Scan to Download App</p>
            <div className="mx-auto flex h-32 w-32 items-center justify-center rounded-xl bg-white p-2 border border-gray-100">
              {/* High-fidelity SVG QR Code Representation */}
              <svg className="h-full w-full text-black" viewBox="0 0 100 100" fill="currentColor">
                {/* Positional Squares */}
                <rect x="0" y="0" width="30" height="30" />
                <rect x="5" y="5" width="20" height="20" fill="white" />
                <rect x="10" y="10" width="10" height="10" />

                <rect x="70" y="0" width="30" height="30" />
                <rect x="75" y="5" width="20" height="20" fill="white" />
                <rect x="80" y="10" width="10" height="10" />

                <rect x="0" y="70" width="30" height="30" />
                <rect x="5" y="75" width="20" height="20" fill="white" />
                <rect x="10" y="80" width="10" height="10" />

                {/* Random QR pixels for mock representation */}
                <rect x="40" y="0" width="10" height="10" />
                <rect x="55" y="10" width="10" height="10" />
                <rect x="45" y="20" width="10" height="10" />
                <rect x="35" y="40" width="10" height="10" />
                <rect x="50" y="50" width="10" height="10" />
                <rect x="65" y="35" width="10" height="10" />
                <rect x="40" y="70" width="10" height="10" />
                <rect x="55" y="80" width="10" height="10" />
                <rect x="80" y="40" width="10" height="10" />
                <rect x="90" y="55" width="10" height="10" />
                <rect x="35" y="65" width="10" height="10" />
                <rect x="65" y="75" width="10" height="10" />
                <rect x="85" y="85" width="15" height="15" />
                <rect x="75" y="65" width="10" height="10" />
              </svg>
            </div>
            <p className="mt-3 text-[10px] text-[var(--muted-foreground)] leading-normal">
              Scan with your mobile camera to download Bloom Haven for iOS & Android
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
