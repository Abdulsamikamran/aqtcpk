"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

const variants = {
  solid:
    "bg-accent text-accent-ink hover:bg-accent-hover",
  ghost:
    "bg-transparent text-fg border border-line-strong hover:border-accent/60",
  dark:
    "bg-ink-950 text-fg border border-line-strong hover:border-accent/60",
};

export default function MagneticButton({
  as: Tag = "button",
  href,
  onClick,
  children,
  variant = "solid",
  className = "",
  strength = 18,
  ...rest
}) {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 220, damping: 18, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 220, damping: 18, mass: 0.4 });

  const handleMouseMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const relX = e.clientX - rect.left - rect.width / 2;
    const relY = e.clientY - rect.top - rect.height / 2;
    x.set((relX / rect.width) * strength);
    y.set((relY / rect.height) * strength);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const Comp = motion[Tag] ?? motion.button;

  return (
    <Comp
      ref={ref}
      href={href}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: sx, y: sy }}
      className={`group relative inline-flex items-center justify-center gap-2.5 px-7 py-4 font-mono text-[13px] uppercase tracking-[0.08em] font-medium cut-corner-sm transition-colors duration-200 ${variants[variant]} ${className}`}
      {...rest}
    >
      {children}
    </Comp>
  );
}
