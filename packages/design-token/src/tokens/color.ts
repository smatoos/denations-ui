export type ColorString = string;
export type ColorHSLA = { h: number; s: number; l: number; a?: number };
export type Color = ColorString | ColorHSLA;
export type ColorScale =
  | 10 // darker shade 1
  | 20 // darker shade 2
  | 30 // darker shade 3
  | 40 // darker shade 4
  | 50 // original shade
  | 60 // lighter shade 1
  | 70 // lighter shade 2
  | 80 // lighter shade 3
  | 90; // lighter shade 4
export type ColorVariant =
  | "white"
  | "black"
  | "gray"
  | "primary"
  | "secondary"
  | "info"
  | "success"
  | "warning"
  | "error"
  | "blueBlack"
  | "blueGray";
export type ColorThemeVariant = "light" | "dark";

export type MinColorScale = 20 | 50 | 80;
export type MonoColorVariant = "white" | "black";
export type MinColorVariant = "info" | "success" | "warning" | "error";

export type ColorWithScale<T> = Record<
  T extends MinColorVariant ? MinColorScale : ColorScale,
  Color
>;

export type Colors<T, P> = {
  [K in ColorVariant]: K extends T
    ? Color
    : ColorWithScale<K extends P ? P : ColorVariant>;
};

// Colors
const darkColors = {
  white: { h: 0, s: 0, l: 100 },
  black: { h: 0, s: 0, l: 0 },
  gray: {
    10: { h: 0, s: 0, l: 15 },
    20: { h: 0, s: 0, l: 29 },
    30: { h: 0, s: 0, l: 44 },
    40: { h: 0, s: 0, l: 59 },
    50: { h: 0, s: 0, l: 74 },
    60: { h: 0, s: 0, l: 79 },
    70: { h: 0, s: 0, l: 84 },
    80: { h: 0, s: 0, l: 89 },
    90: { h: 0, s: 0, l: 95 },
  },
  primary: {
    10: { h: 171, s: 100, l: 10 },
    20: { h: 171, s: 100, l: 20 },
    30: { h: 171, s: 100, l: 30 },
    40: { h: 171, s: 100, l: 40 },
    50: { h: 171, s: 100, l: 50 },
    60: { h: 171, s: 100, l: 60 },
    70: { h: 171, s: 100, l: 70 },
    80: { h: 171, s: 100, l: 80 },
    90: { h: 171, s: 100, l: 90 },
  },
  info: {
    20: { h: 205, s: 100, l: 20 },
    50: { h: 205, s: 100, l: 50 },
    80: { h: 205, s: 98, l: 80 },
  },
  success: {
    20: { h: 153, s: 100, l: 14 },
    50: { h: 153, s: 100, l: 35 },
    80: { h: 153, s: 52, l: 74 },
  },
  warning: {
    20: { h: 46, s: 100, l: 20 },
    50: { h: 46, s: 100, l: 50 },
    80: { h: 46, s: 100, l: 80 },
  },
  error: {
    20: { h: 345, s: 67, l: 24 },
    50: { h: 345, s: 97, l: 60 },
    80: { h: 345, s: 95, l: 84 },
  },
  blueGray: {
    10: { h: 220, s: 15, l: 12 },
    20: { h: 219, s: 15, l: 24 },
    30: { h: 219, s: 15, l: 36 },
    40: { h: 219, s: 15, l: 49 },
    50: { h: 219, s: 15, l: 61 },
    60: { h: 220, s: 15, l: 69 },
    70: { h: 220, s: 15, l: 76 },
    80: { h: 220, s: 15, l: 84 },
    90: { h: 220, s: 15, l: 92 },
  },
  blueBlack: {
    10: { h: 225, s: 40, l: 2 },
    20: { h: 227, s: 39, l: 5 },
    30: { h: 227, s: 41, l: 7 },
    40: { h: 227, s: 39, l: 9 },
    50: { h: 226, s: 38, l: 11 },
    60: { h: 227, s: 12, l: 29 },
    70: { h: 227, s: 6, l: 47 },
    80: { h: 227, s: 5, l: 65 },
    90: { h: 228, s: 5, l: 82 },
  },
};

export type KnownColorVariant = keyof typeof darkColors;

export const colors = {
  dark: darkColors as Pick<
    Colors<MonoColorVariant, MinColorVariant>,
    KnownColorVariant
  >,
};
export type ColorTheme = typeof colors;
