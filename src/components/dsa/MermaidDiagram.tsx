"use client";

import { useEffect, useRef, useState } from "react";

let mermaidInitialized = false;

export function MermaidDiagram({ chart }: { chart: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    const render = async () => {
      try {
        const mermaid = (await import("mermaid")).default;

        if (!mermaidInitialized) {
          mermaid.initialize({
            startOnLoad: false,
            theme: "dark",
            themeVariables: {
              background: "#11161C",
              mainBkg: "#1A2330",
              nodeBorder: "#2D3A47",
              clusterBkg: "#1A2330",
              titleColor: "#E6EDF3",
              edgeLabelBackground: "#11161C",
              nodeTextColor: "#E6EDF3",
              lineColor: "#5A6470",
            },
            flowchart: { curve: "basis", padding: 16 },
          });
          mermaidInitialized = true;
        }

        const id = `mermaid-${Math.random().toString(36).slice(2, 9)}`;
        const { svg } = await mermaid.render(id, chart);
        if (!cancelled && ref.current) {
          ref.current.innerHTML = svg;
          // Make SVG responsive
          const svgEl = ref.current.querySelector("svg");
          if (svgEl) {
            svgEl.style.maxWidth = "100%";
            svgEl.style.height = "auto";
          }
        }
      } catch (e) {
        if (!cancelled) setError(String(e));
      }
    };

    render();
    return () => {
      cancelled = true;
    };
  }, [chart]);

  if (error) return null;

  return (
    <div
      ref={ref}
      className="overflow-x-auto flex justify-center py-2 [&_svg]:max-w-full"
    />
  );
}
