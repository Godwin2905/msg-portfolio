"use client";

import { useEffect, useRef } from "react";

const members = [
  { initials: "GA", name: "Godwin", color1: "#a293ff", color2: "#00f0ff" },
  { initials: "MM", name: "Mashiruddin", color1: "#00f0ff", color2: "#a293ff" },
  { initials: "MS", name: "Saihaan", color1: "#c084fc", color2: "#818cf8" },
];

export default function TeamAvatar3D() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let frame = 0;
    let animId: number;

    const tick = () => {
      frame += 0.008;
      const cards = containerRef.current?.querySelectorAll<HTMLElement>(".avatar-card");
      cards?.forEach((card, i) => {
        const angle = frame + (i * Math.PI * 2) / 3;
        const x = Math.cos(angle) * 6;
        const y = Math.sin(angle * 0.7) * 4;
        card.style.transform = `translateX(${x}px) translateY(${y}px)`;
      });
      animId = requestAnimationFrame(tick);
    };

    animId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(animId);
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative flex items-center justify-center"
      style={{ perspective: "800px", width: "100%", height: "100%" }}
    >
      {/* Outer glow ring */}
      <div
        className="absolute rounded-full opacity-20 animate-ping"
        style={{
          width: 340,
          height: 340,
          background: "linear-gradient(135deg, #a293ff, #00f0ff)",
          filter: "blur(40px)",
        }}
      />

      {/* Central group */}
      <div className="relative flex flex-col items-center gap-4">
        {/* Top card (GA) */}
        <div
          className="avatar-card relative"
          style={{ willChange: "transform", transition: "transform 0.1s linear" }}
        >
          <div
            className="relative w-[100px] h-[100px] md:w-[160px] md:h-[160px] rounded-3xl flex flex-col items-center justify-center shadow-2xl"
            style={{
              background: "linear-gradient(135deg, #a293ff22, #00f0ff22)",
              border: "1.5px solid #a293ff50",
              backdropFilter: "blur(12px)",
              boxShadow: "0 8px 32px #a293ff30, inset 0 1px 0 rgba(255,255,255,0.15)",
            }}
          >
            {/* Gradient initials */}
            <span
              className="font-black text-2xl md:text-5xl"
              style={{
                background: "linear-gradient(135deg, #a293ff, #00f0ff)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                fontFamily: "var(--font-montserrat), sans-serif",
              }}
            >
              GA
            </span>
            <span className="text-xs font-semibold mt-1 text-gray-500">
              Godwin
            </span>
            {/* Shine overlay */}
            <div
              className="absolute inset-0 rounded-3xl pointer-events-none"
              style={{
                background:
                  "linear-gradient(135deg, rgba(255,255,255,0.12) 0%, transparent 60%)",
              }}
            />
          </div>
        </div>

        {/* Bottom row (MM + MS) */}
        <div className="flex gap-4">
          <div
            className="avatar-card relative"
            style={{ willChange: "transform", transition: "transform 0.1s linear" }}
          >
            <div
              className="relative w-[90px] h-[90px] md:w-[140px] md:h-[140px] rounded-3xl flex flex-col items-center justify-center shadow-2xl"
              style={{
                background: "linear-gradient(135deg, #00f0ff22, #a293ff22)",
                border: "1.5px solid #00f0ff50",
                backdropFilter: "blur(12px)",
                boxShadow: "0 8px 32px #00f0ff30, inset 0 1px 0 rgba(255,255,255,0.15)",
              }}
            >
              <span
                className="font-black text-xl md:text-4xl"
                style={{
                  background: "linear-gradient(135deg, #00f0ff, #a293ff)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  fontFamily: "var(--font-montserrat), sans-serif",
                }}
              >
                MM
              </span>
              <span className="text-xs font-semibold mt-1 text-gray-500">
                Mashiruddin
              </span>
              <div
                className="absolute inset-0 rounded-3xl pointer-events-none"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(255,255,255,0.12) 0%, transparent 60%)",
                }}
              />
            </div>
          </div>

          <div
            className="avatar-card relative"
            style={{ willChange: "transform", transition: "transform 0.1s linear" }}
          >
            <div
              className="relative w-[90px] h-[90px] md:w-[140px] md:h-[140px] rounded-3xl flex flex-col items-center justify-center shadow-2xl"
              style={{
                background: "linear-gradient(135deg, #c084fc22, #818cf822)",
                border: "1.5px solid #c084fc50",
                backdropFilter: "blur(12px)",
                boxShadow: "0 8px 32px #c084fc30, inset 0 1px 0 rgba(255,255,255,0.15)",
              }}
            >
              <span
                className="font-black text-xl md:text-4xl"
                style={{
                  background: "linear-gradient(135deg, #c084fc, #818cf8)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  fontFamily: "var(--font-montserrat), sans-serif",
                }}
              >
                MS
              </span>
              <span className="text-xs font-semibold mt-1 text-gray-500">
                Saihaan
              </span>
              <div
                className="absolute inset-0 rounded-3xl pointer-events-none"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(255,255,255,0.12) 0%, transparent 60%)",
                }}
              />
            </div>
          </div>
        </div>

        {/* Team label */}
        <div
          className="mt-2 px-5 py-2 rounded-full text-sm font-bold"
          style={{
            background: "linear-gradient(135deg, #a293ff20, #00f0ff20)",
            border: "1px solid #a293ff40",
            color: "#a293ff",
            letterSpacing: "0.05em",
          }}
        >
          Dev Team
        </div>
      </div>
    </div>
  );
}
