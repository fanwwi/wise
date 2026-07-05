"use client";
import { useEffect } from "react";
import { initLenis } from "@/lib/lenis";

export default function SmoothScroll({ children }) {
  useEffect(() => {
    const cleanup = initLenis();
    return () => cleanup();
  }, []);

  return <>{children}</>;
};
