import { Color } from "./color";

export type ShadowVariant = "inset" | "none";
export interface ShadowValues {
  inset?: ShadowVariant;
  offsetX: string | number;
  offsetY: string | number;
  blurRadius?: string | number;
  spreadRadius?: string | number;
  color?: Color;
}
export type BoxShadowValues = ShadowValues;
export type TextShadowValues = Omit<ShadowValues, "spreadRadius" | "inset">;
export type ElevationIndex = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
export type ZIndexVariant =
  | "background" // -100
  | "base" // 0
  | "header" // 100
  | "overlay" // 200
  | "modal" // 400
  | "alert" // 800
  | "tooltip"; // 1600

export const elevations = {
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

export const zIndex = {
  background: -100,
  base: 0,
  header: 100,
  overlay: 200,
  modal: 400,
  alert: 800,
  tooltip: 1600,
};

export type Elevations = typeof elevations;
export type ZIndex = typeof zIndex;
