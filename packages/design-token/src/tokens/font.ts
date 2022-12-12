export type FontFamily = string;
export type FontThemeVariant = "primary" | "secondary" | "system";
export type FontWeightVariant =
  | "thin"
  | "extraLight"
  | "light"
  | "normal"
  | "medium"
  | "semiBold"
  | "bold"
  | "extraBold"
  | "black";
export type TextTransform = "none" | "capitalize" | "uppercase" | "lowercase";
export type FontWeightScale =
  | 100
  | 200
  | 300
  | 400
  | 500
  | 600
  | 700
  | 800
  | 900;

export const fonts = {
  primary: "",
  secondary: "",
  system: "",
};

export const fontWeight = {
  thin: 100,
  extraLight: 200,
  light: 300,
  normal: 400,
  medium: 500,
  semiBold: 600,
  bold: 700,
  extraBold: 800,
  black: 900,
};

export type Fonts = typeof fonts;
export type FontWeight = typeof fontWeight;
