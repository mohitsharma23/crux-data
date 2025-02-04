import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function transformCruxData(cruxResponse: any) {
  const { key, metrics, collectionPeriod } = cruxResponse;

  return {
    origin: key.origin,
    fcp: {
      value: +metrics.first_contentful_paint?.percentiles?.p75 || "N/A",
      histogram: metrics.first_contentful_paint?.histogram,
    },
    lcp: {
      value: +metrics.largest_contentful_paint?.percentiles?.p75 || "N/A",
      histogram: metrics.largest_contentful_paint?.histogram,
    },
    inp: {
      value: +metrics.interaction_to_next_paint?.percentiles?.p75 || "N/A",
      histogram: metrics.interaction_to_next_paint?.histogram,
    },
    cls: {
      value: +metrics.cumulative_layout_shift?.percentiles?.p75 || "N/A",
      histogram: metrics.cumulative_layout_shift?.histogram,
    },
    ttfb: {
      value:
        +metrics.experimental_time_to_first_byte?.percentiles?.p75 || "N/A",
      histogram: metrics.experimental_time_to_first_byte?.histogram,
    },
    rtt: +metrics.round_trip_time?.percentiles?.p75 || "N/A",
    collectionPeriod: `${collectionPeriod.firstDate.year}-${collectionPeriod.firstDate.month}-${collectionPeriod.firstDate.day} → ${collectionPeriod.lastDate.year}-${collectionPeriod.lastDate.month}-${collectionPeriod.lastDate.day}`,
  };
}
