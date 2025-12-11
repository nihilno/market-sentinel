// components/widgets/trading-view-widget.tsx
"use client";

import useTradingViewWidget from "@/hooks/use-trading-view-widget";
import { TradingViewWidgetProps } from "@/lib/types";
import { cn } from "@/lib/utils";
import { memo } from "react";

function TradingViewWidget({
  title,
  scriptUrl = "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js",
  config = {},
  height = 600,
  className = "",
}: TradingViewWidgetProps) {
  const containerRef = useTradingViewWidget(scriptUrl, config, height);

  return (
    <div className="w-full">
      {title && (
        <h3 className="mb-5 text-2xl font-semibold text-gray-100">{title}</h3>
      )}
      <div
        ref={containerRef}
        className={cn("tradingview-widget-container", className)}
        style={{ height }}
      />
    </div>
  );
}

export default memo(TradingViewWidget);
