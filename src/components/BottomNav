// Removed unused imports
export type TabKey = "home" | "news" | "rules" | "quiz" | "support";

import { useI18n } from "../i18n";

export default function BottomNav({ active, onChange }: { active: TabKey; onChange: (t: TabKey) => void }) {
  const { t } = useI18n();

  const tabs: { key: TabKey; label: string; icon: (active: boolean) => React.ReactNode }[] = [
    {
      key: "home",
      label: t("nav.home"),
      icon: (a) => (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={a ? 2.2 : 1.8} className="transition-transform duration-300">
          <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
          <polyline points="9 22 9 12 15 12 15 22" />
        </svg>
      ),
    },
    {
      key: "news",
      label: t("nav.news"),
      icon: (a) => (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={a ? 2.2 : 1.8} className="transition-transform duration-300">
          <path d="M4 22V4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v18" />
          <line x1="8" y1="6" x2="16" y2="6" />
          <line x1="8" y1="10" x2="16" y2="10" />
          <line x1="8" y1="14" x2="14" y2="14" />
        </svg>
      ),
    },
    {
      key: "rules",
      label: t("nav.rules"),
      icon: (a) => (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={a ? 2.2 : 1.8} className="transition-transform duration-300">
          <circle cx="12" cy="12" r="10" />
          <polyline points="12 6 12 12 16 14" />
        </svg>
      ),
    },
    {
      key: "quiz",
      label: t("nav.quiz"),
      icon: (a) => (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={a ? 2.2 : 1.8} className="transition-transform duration-300">
          <path d="M9 11l3 3L22 4" />
          <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
        </svg>
      ),
    },
    {
      key: "support",
      label: t("nav.support"),
      icon: (a) => (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={a ? 2.2 : 1.8} className="transition-transform duration-300">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        </svg>
      ),
    },
  ];

  return (
    <div className="fixed bottom-0 inset-x-0 z-40 pointer-events-none">
      <nav
        className="pointer-events-auto relative w-full bg-[#03010b]/[.98] border-t border-[#ff7ad8]/[.13] shadow-[0_-12px_60px_rgba(0,0,0,.85),0_0_40px_rgba(255,122,216,.05)] backdrop-blur-[14px]"
        aria-label="Main navigation"
      >
        <div className="mx-auto max-w-[980px] px-3 pb-[max(8px,env(safe-area-inset-bottom))] sm:px-8">
          <div className="grid grid-cols-5 py-2 sm:py-3.5">
            {tabs.map(ts => {
              const isActive = ts.key === active;
              return (
                <button
                  key={ts.key}
                  onClick={() => onChange(ts.key)}
                  className={`flex flex-col items-center justify-center gap-1.5 py-2 rounded-xl transition-all duration-300 cursor-pointer select-none ${
                    isActive ? "text-[#ff7ad8]" : "text-zinc-500 hover:text-zinc-300"
                  }`}
                  style={
                    isActive
                      ? {
                          textShadow: "0 0 12px rgba(255,122,216,0.5)",
                          filter: "drop-shadow(0 0 6px rgba(255,122,216,0.3))"
                        }
                      : undefined
                  }
                  aria-current={isActive ? "page" : undefined}
                >
                  <span className={isActive ? "scale-110" : ""}>{ts.icon(isActive)}</span>
                  <span className={`text-[11px] sm:text-[13px] tracking-[-0.01em] transition-all ${isActive ? "font-[700]" : "font-[500]"}`}>
                    {ts.label}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </nav>
    </div>
  );
}
