import { useEffect, useState } from "react";

export default function SplashScreen({ onDone }: { onDone: () => void }) {
  const [out, setOut] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setOut(true), 1750);
    const t2 = setTimeout(onDone, 2150);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, [onDone]);

  return (
    <div className={`fixed inset-0 z-[80] bg-[#060411] flex items-center justify-center transition-opacity duration-500 ${out ? "opacity-0" : "opacity-100"}`}>
      <div className="aurora-bg" />
      <div className="relative flex flex-col items-center">
        {/* glowing rings */}
        <div className="relative w-[124px] h-[124px] flex items-center justify-center">
          <div className="absolute inset-0 rounded-full"
            style={{
              background: "radial-gradient(closest-side, rgba(177,97,255,.34), rgba(133,68,255,.08) 62%, transparent 72%)",
              filter: "blur(18px)"
            }}
          />
          <div className="absolute inset-[8px] rounded-full"
            style={{
              boxShadow:
                "inset 0 0 28px rgba(183,109,255,.45), 0 0 64px rgba(150,71,255,.32)",
              border: "1px solid rgba(198,130,255,.38)",
              background: "radial-gradient(120px 120px at 50% 44%, rgba(255,255,255,.045), rgba(255,255,255,.011))"
            }}
          />
          <div
            className="absolute inset-0 rounded-full"
            style={{
              background: "conic-gradient(from 0deg, rgba(208,137,255,.9), rgba(140,78,255,.18), rgba(214,134,255,.9))",
              WebkitMask: "radial-gradient(farthest-side, transparent calc(100% - 3px), #000 calc(100% - 2.7px))",
              mask: "radial-gradient(farthest-side, transparent calc(100% - 3px), #000 calc(100% - 2.7px))",
              animation: "spinGlow 2.15s linear infinite"
            }}
          />
          {/* logo */}
          <div className="relative z-10 w-[72px] h-[72px] rounded-[22px] flex items-center justify-center"
            style={{
              background: "linear-gradient(180deg, rgba(255,255,255,.091), rgba(255,255,255,.018))",
              border: "1px solid rgba(205,148,255,.33)",
              boxShadow: "inset 0 1px 0 rgba(255,255,255,.11), 0 0 36px rgba(155,80,255,.32)"
            }}
          >
            <svg width="34" height="34" viewBox="0 0 24 24" fill="none">
              <path d="M12 20s7-4.35 7-9.5C19 7.46 16.76 5.5 14.3 5.5c-1.55 0-2.6.84-2.3 2.09C12.53 6.34 11.35 5.5 9.7 5.5 7.24 5.5 5 7.46 5 10.5 5 15.65 12 20 12 20Z" 
                stroke="#f0e4ff" strokeWidth="1.45" />
              <circle cx="12" cy="10.9" r="1.65" fill="#f0e4ff" opacity=".95"/>
            </svg>
          </div>
        </div>
        <div className="mt-7 text-center">
          <div className="text-[25px] sm:text-[28px] font-[800] tracking-[-0.018em] text-[#f3ebff] neon-text">Резонанс</div>
          <div className="mt-2 text-[13.5px] text-zinc-400 tracking-wide">Этика знакомств • согласие • ЭИ</div>
        </div>
        <div className="mt-9 w-40 h-[2px] rounded-full overflow-hidden bg-white/[.07]">
          <div className="h-full w-1/2 rounded-full"
            style={{
              background: "linear-gradient(90deg, #c57bff, #8b54ff)",
              boxShadow: "0 0 18px rgba(186,105,255,.8)",
              animation: "breathe 1.35s ease-in-out infinite"
            }}
          />
        </div>
      </div>
    </div>
  );
}
