"use client";

import { useEffect, useState, useRef } from "react";
import {
  ArrowRight,
  ChevronDown,
  TrendingUp,
  Shield,
  FileText,
  DollarSign,
} from "lucide-react";

const typewriterWords = [
  "Individuals",
  "Freelancers",
  "Businesses",
  "Startups",
  "Corporations",
];

const floatingIcons = [
  { Icon: TrendingUp, delay: 0, x: "10%", y: "20%", size: 24 },
  { Icon: Shield, delay: 1.2, x: "85%", y: "15%", size: 20 },
  { Icon: FileText, delay: 0.6, x: "90%", y: "65%", size: 22 },
  { Icon: DollarSign, delay: 1.8, x: "5%", y: "70%", size: 26 },
  { Icon: TrendingUp, delay: 2.4, x: "75%", y: "80%", size: 18 },
  { Icon: Shield, delay: 0.3, x: "20%", y: "85%", size: 20 },
];

export default function Hero() {
  const [wordIndex, setWordIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [visible, setVisible] = useState(false);
  const timeoutRef = useRef(null);

  useEffect(() => {
    setVisible(true);
  }, []);

  useEffect(() => {
    const currentWord = typewriterWords[wordIndex];
    const speed = isDeleting ? 60 : 100;

    timeoutRef.current = setTimeout(() => {
      if (!isDeleting) {
        setDisplayed(currentWord.slice(0, displayed.length + 1));
        if (displayed.length + 1 === currentWord.length) {
          setTimeout(() => setIsDeleting(true), 1600);
        }
      } else {
        setDisplayed(currentWord.slice(0, displayed.length - 1));
        if (displayed.length - 1 === 0) {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % typewriterWords.length);
        }
      }
    }, speed);

    return () => clearTimeout(timeoutRef.current);
  }, [displayed, isDeleting, wordIndex]);

  const scrollToServices = () => {
    document.querySelector("#services")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Video background */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        autoPlay
        muted
        loop
        src="/video.mp4"
        playsInline
      />

      {/* Dark base overlay */}
      <div className="absolute inset-0 bg-black/50 z-[1]" />

      {/* Gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-transparent to-black/80 z-[2]" />

      {/* Optional: subtle blur (adds premium feel) */}
      <div className="absolute inset-0 backdrop-blur-[2px] z-[3]" />

      {/* Grid pattern overlay (keep but move above) */}
      <div
        className="absolute inset-0 opacity-5 z-[4]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Floating icons */}
      {floatingIcons.map(({ Icon, delay, x, y, size }, i) => (
        <div
          key={i}
          className="absolute z-99 hidden md:flex items-center justify-center w-12 h-12 rounded-xl"
          style={{
            left: x,
            top: y,
            background: "rgba(255,255,255,0.08)",
            border: "1px solid rgba(255,255,255,0.15)",
            animation: `float 4s ease-in-out ${delay}s infinite`,
          }}
        >
          <Icon size={size} className="text-white/60" />
        </div>
      ))}

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto  px-4 sm:px-6 lg:px-8 pt-24 pb-20">
        <div className="max-w-4xl">
          {/* Badge */}
          <div
            className={`inline-flex items-center  gap-2 px-4 py-2 rounded-full mb-8 transition-all duration-700 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
            style={{
              background: "rgba(255,255,255,0.12)",
              border: "1px solid rgba(255,255,255,0.25)",
              transitionDelay: "100ms",
            }}
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-white/90 text-sm font-medium">
              Pakistan&apos;s Trusted Tax Consultancy
            </span>
          </div>

          {/* Headline */}
          <h1
            className={`font-heading font-bold text-4xl  sm:text-5xl lg:text-6xl xl:text-7xl text-white leading-tight mb-6 transition-all duration-700 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            Expert Tax Solutions
            <br />
            <span className="text-white/75">for </span>
            <span className="relative">
              <span className="text-white">{displayed}</span>
              <span className="inline-block w-0.5 h-[0.9em] bg-white ml-0.5 align-middle animate-pulse" />
            </span>
            <br />
            <span className="text-white/75">in Pakistan</span>
          </h1>

          {/* Subtext */}
          <p
            className={`text-white/70 text-lg sm:text-xl leading-relaxed mb-10 max-w-2xl transition-all duration-700 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "350ms" }}
          >
            We help you reduce taxes, stay compliant, and grow financially with
            confidence. Over 20 years of expertise serving individuals,
            freelancers, and corporations.
          </p>

          {/* CTA Buttons */}
          <div
            className={`flex flex-col sm:flex-row gap-4 mb-16 transition-all duration-700 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "500ms" }}
          >
            <button
              onClick={scrollToContact}
              className="group flex items-center justify-center gap-2 px-8 py-4 bg-[#066787] text-white font-semibold rounded-xl text-base shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-200"
            >
              Book Free Consultation
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </button>
            <button
              onClick={scrollToServices}
              className="flex items-center justify-center gap-2 px-8 py-4 text-white font-semibold rounded-xl text-base border border-white/30 hover:bg-white/10 transition-all duration-200"
            >
              Explore Services
            </button>
          </div>

          {/* Stats row */}
          <div
            className={`flex flex-wrap gap-8 transition-all duration-700 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "650ms" }}
          >
            {[
              { value: "20+", label: "Years Experience" },
              { value: "300+", label: "Happy Clients" },
              { value: "98%", label: "Retention Rate" },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col">
                <span className="text-3xl font-bold text-white font-heading">
                  {stat.value}
                </span>
                <span className="text-white/60 text-sm">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToServices}
        className="absolute z-99 bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/50 hover:text-white/80 transition-colors cursor-pointer"
      >
        <span className="text-xs">Scroll down</span>
        <ChevronDown size={20} className="animate-bounce" />
      </button>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-12px) rotate(3deg); }
          66% { transform: translateY(-6px) rotate(-2deg); }
        }
      `}</style>
    </section>
  );
}
