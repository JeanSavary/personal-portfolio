"use client";

import { useEffect, useRef, useState } from "react";
import {
  motion,
  useInView,
  useMotionValue,
  useSpring,
  useTransform,
} from "motion/react";
import BlurFade from "@/components/magicui/blur-fade";
import { useLanguage } from "@/contexts/language-context";
import { translations } from "@/data/translations";

// --- Animated number ticker ---------------------------------------------------

function NumberTicker({
  value,
  suffix = "",
  prefix = "",
  delay = 0,
}: {
  value: number;
  suffix?: string;
  prefix?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, {
    damping: 40,
    stiffness: 90,
  });
  const display = useTransform(spring, (v) =>
    Intl.NumberFormat("en-US").format(Math.round(v)),
  );

  const [text, setText] = useState("0");

  useEffect(() => {
    if (isInView) {
      const timeout = setTimeout(() => motionValue.set(value), delay * 1000);
      return () => clearTimeout(timeout);
    }
  }, [isInView, value, delay, motionValue]);

  useEffect(() => {
    return display.on("change", (v) => setText(v));
  }, [display]);

  return (
    <span ref={ref} className="tabular-nums">
      {prefix}
      <motion.span>{text}</motion.span>
      {suffix}
    </span>
  );
}

// --- Component ----------------------------------------------------------------

export default function KPIStrip({ delay = 0 }: { delay?: number }) {
  const { language } = useLanguage();
  const t = translations[language];

  const kpis = [
    {
      value: 7,
      suffix: "+",
      prefix: "",
      label: t.kpis.experience,
      type: "number",
    },
    {
      value: 25,
      suffix: "+",
      prefix: "",
      label: t.kpis.companies,
      type: "number",
    },
    {
      value: 5,
      suffix: "/5",
      prefix: "",
      label: t.kpis.performance,
      type: "number",
    },
    {
      value: 0,
      suffix: "",
      prefix: "",
      label: t.kpis.languages,
      type: "flags",
    },
  ];

  const flags = ["🇫🇷", "🇬🇧", "🇪🇸"];

  return (
    <BlurFade delay={delay}>
      <div className="flex flex-row items-center gap-2 border rounded-lg overflow-hidden bg-background/80 backdrop-blur-sm py-3 px-2 w-full lg:flex-col lg:p-2 lg:w-[100px]">
        {kpis.map((kpi, i) => (
          <div key={kpi.label} className="flex-1 lg:w-full lg:flex-none">
            <motion.div
              className="flex flex-col items-center justify-center gap-1 py-1 px-1 cursor-pointer rounded-md lg:py-1.5"
              initial="initial"
              whileHover="hover"
              variants={{
                initial: { backgroundColor: "rgba(4, 120, 87, 0)" },
                hover: { backgroundColor: "rgb(4, 120, 87)" },
              }}
              transition={{ duration: 0.2 }}
            >
              <motion.span
                className="text-lg sm:text-xl font-semibold tracking-tight text-emerald-700 lg:text-sm"
                variants={{
                  initial: {
                    scale: 1,
                    color: "rgb(4, 120, 87)",
                    textShadow: "0 0 0px rgba(255, 255, 255, 0)",
                  },
                  hover: {
                    scale: 1.1,
                    color: "rgb(255, 255, 255)",
                    textShadow: "0 0 8px rgba(255, 255, 255, 0.3)",
                  },
                }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                {kpi.type === "flags" ? (
                  <span className="flex gap-1">
                    {flags.map((flag, idx) => (
                      <span key={idx} className="text-base lg:text-sm">
                        {flag}
                      </span>
                    ))}
                  </span>
                ) : (
                  <NumberTicker
                    value={kpi.value}
                    suffix={kpi.suffix}
                    prefix={kpi.prefix}
                    delay={delay + i * 0.08}
                  />
                )}
              </motion.span>
              <motion.span
                className="text-[8px] sm:text-[9px] text-muted-foreground font-medium text-center leading-tight max-w-full lg:text-[10px]"
                variants={{
                  initial: {},
                  hover: { color: "rgb(255, 255, 255)" },
                }}
              >
                {kpi.label}
              </motion.span>
            </motion.div>
            {i < kpis.length - 1 && (
              <div className="h-12 mt-2 w-px bg-border/60 lg:mx-0 lg:h-px lg:w-full" />
            )}
          </div>
        ))}
      </div>
    </BlurFade>
  );
}
