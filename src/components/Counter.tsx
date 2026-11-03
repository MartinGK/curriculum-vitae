"use client";

import { animate, useInView, useReducedMotion } from "motion/react";
import { useEffect, useRef, useState } from "react";

type Props = {
  value: number;
  from?: number;
  prefix?: string;
  suffix?: string;
};

export function Counter({ value, from = 0, prefix = "", suffix = "" }: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -15% 0px" });
  const reduce = useReducedMotion();
  // Server render and no-JS show the real number; the count only replays once in view.
  const [display, setDisplay] = useState(value);
  const [armed, setArmed] = useState(false);

  useEffect(() => {
    if (reduce) return;
    setArmed(true);
    setDisplay(from);
  }, [reduce, from]);

  useEffect(() => {
    if (!armed || !inView) return;
    const controls = animate(from, value, {
      duration: 1.6,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (latest) => setDisplay(Math.round(latest)),
    });
    return () => controls.stop();
  }, [armed, inView, from, value]);

  return (
    <span ref={ref} className="tabular" aria-label={`${prefix}${value}${suffix}`}>
      <span aria-hidden="true">
        {prefix}
        {display}
        {suffix}
      </span>
    </span>
  );
}
