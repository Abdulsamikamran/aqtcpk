"use client";

const tickerItems = [
  "20+ Years Experience",
  "500+ Clients Served",
  "98% Retention Rate",
  "FBR Registered Consultants",
  "Income Tax Filing",
  "GST Registration",
  "NTN Registration",
  "Corporate Compliance",
];

export default function TrustBar() {
  return (
    <div className="relative bg-ink-950 border-y border-line overflow-hidden py-4">
      <div className="marquee-track">
        {[0, 1].map((rep) => (
          <div key={rep} className="flex items-center shrink-0">
            {tickerItems.map((item, i) => (
              <div key={`${rep}-${i}`} className="flex items-center shrink-0">
                <span className="font-mono text-[13px] uppercase tracking-[0.1em] text-fg-dim px-8">
                  {item}
                </span>
                <span className="w-1.5 h-1.5 bg-accent/70 rotate-45 shrink-0" />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
