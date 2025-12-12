"use client";

import { useEffect, useRef } from "react";

export default function useTradingViewWidget(
  scriptUrl: string,
  config: Record<string, unknown>,
) {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    if (containerRef.current.dataset.tvLoaded === "true") return;

    const script = document.createElement("script");
    script.src = scriptUrl;
    script.async = true;

    try {
      script.textContent = JSON.stringify(config);
    } catch (err) {
      script.textContent = "{}";
      console.error("TradingView config stringify failed", err);
    }

    containerRef.current.appendChild(script);
    containerRef.current.dataset.tvLoaded = "true";

    return () => {
      if (containerRef.current && containerRef.current.contains(script))
        containerRef.current.removeChild(script);
      if (containerRef.current) delete containerRef.current.dataset.tvLoaded;
    };
  }, [scriptUrl, config]);

  return containerRef;
}
