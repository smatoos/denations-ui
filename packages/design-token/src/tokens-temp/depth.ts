import { Elevations, ZIndexes } from "../types";

export const elevations: Elevations = {
  0: "none",
  1: {
    offsetX: 0,
    offsetY: 3,
    blurRadius: 6,
    color: "rgba(140, 140, 140, 0.08)",
  },
  2: {
    offsetX: 0,
    offsetY: 10,
    blurRadius: 25,
    color: "rgba(140, 140, 140, 0.14)",
  },
  3: {
    offsetX: 0,
    offsetY: 12,
    blurRadius: 25,
    color: "rgba(140, 140, 140, 0.21)",
  },
  4: {
    offsetX: 0,
    offsetY: 14,
    blurRadius: 25,
    color: "rgba(140, 140, 140, 0.27)",
  },
};

export const zIndex: ZIndexes = {
  background: -100,
  base: 0,
  header: 100,
  overlay: 200,
  modal: 400,
  alert: 800,
  tooltip: 1600,
};
