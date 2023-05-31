"use client";
import { useCallback, useEffect, useRef } from "react";
import * as Plot from "@observablehq/plot";
import json from "../../dataset.json";
import { CachedContents } from "@/types/data";

type BarchartElement = (HTMLElement | SVGSVGElement) & Plot.Plot;

type ExibitionData = { name: string | number; value: number }[];

console.log("DEBUG json.meta.view.columns", json.meta.view.columns);

const data = json.meta.view.columns.filter((column) => column.id > 0);

const exibitionDate = data
  .map(({ cachedContents, description }) => {
    return {
      title: description,
      fullObject: cachedContents,
      data: cachedContents?.top.map(({ item, count }) => {
        return {
          name: isNaN(Number(item)) ? item : Number(item),
          value: Number(count),
        };
      }),
    };
  })
  .filter(({ data = [] }) => {
    return data.length > 1;
  });

console.log("DEBUG exibitionDate", exibitionDate);

const createChart = (
  title: string,
  data: ExibitionData,
  fullObject: CachedContents
) => {
  const barchartElement = Plot.plot({
    className: "barchart",
    marginBottom: 60,
    height: 600,
    x: {
      tickRotate: data.length < 5 ? 0 : -75,
    },
    y: {
      transform: (d) => d,
      grid: 10,
      label: title,
    },
    marks: [
      Plot.ruleY(data, { x: "", y: "" }),
      Plot.barY(data, {
        x: "name",
        y: "value",
        sort: {
          x: "y",
          reverse: true,
          limit: parseInt(fullObject.cardinality),
        },
        fill: "steelblue",
      }),
    ],
  });

  return barchartElement;
};

export default function BarChart() {
  const containerRef = useRef<HTMLDivElement>(null);

  const appendElement = useCallback(
    (
      containerRef: React.RefObject<HTMLDivElement>,
      element: BarchartElement
    ) => {
      if (containerRef?.current) {
        containerRef.current.appendChild(element);
      }
    },
    []
  );

  useEffect(() => {
    const chartsElements = exibitionDate.map(
      ({ title = "", data = [], fullObject }) =>
        createChart(title, data, fullObject as CachedContents)
    );

    chartsElements.forEach((chartElement) => {
      appendElement(containerRef, chartElement);
    });
  }, [appendElement]);

  return <div ref={containerRef} />;
}
