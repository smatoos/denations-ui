// Type of Colors
export type ColorString = string;
export type ColorHSLA = { h: number; s: number; l: number; a?: number };
export type Color = ColorString | ColorHSLA;
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
export type ColorWithScale = {
  [K in ColorScale]?: Color;
};

export type Colors = {
  [K in ColorVariant]: K extends "white" | "black" ? Color : ColorWithScale;
};
export type ColorThemeVariant = "light" | "dark";
// export type ColorThemeVariant = "light" | "dark" | "contrast";
export type ColorTheme = {
  [K in ColorThemeVariant]?: Colors;
};

// Type of Sizes
export type Size = string | number;
export interface SizeWithUnit {
  size: Size;
  unit: SizeUnit;
}
export type SizeOrSizeWithUnit<T extends Size> = T extends number
  ? SizeWithUnit
  : string;
export type Sizes<T extends SemanticSizeUnit | SizeScale> = {
  [K in T]?: SizeOrSizeWithUnit<number> | SizeOrSizeWithUnit<string>;
};
export type SizeVariant = "font" | "border" | "spacing" | "form";

export type SizeTheme = {
  [K in SizeVariant]?: K extends "form"
    ? Sizes<SemanticSizeUnit>
    : Sizes<SizeScale>;
};

// Type of Units
export type SizeUnit =
  | "px"
  | "%"
  | "rem"
  | "em"
  | "vh"
  | "vw"
  | "vmin"
  | "vmax";

export interface Units {
  unit: SizeUnit;
}

// Type of Scales
export type SizeScale = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
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

export interface Scales {
  size?: SizeScale;
  color?: ColorScale;
}

// Type of Fonts
export type FontFamily = string;
export type FontThemeVariant = "primary" | "secondary" | "system";
export type FontTheme = {
  [K in FontThemeVariant]?: FontFamily;
};
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
export type FontWeights = {
  [K in FontWeightVariant]?: number;
};

export type TextTransform = "none" | "capitalize" | "uppercase" | "lowercase";
export type BorderStyle =
  | "none"
  | "hidden"
  | "dotted"
  | "dashed"
  | "solid"
  | "double"
  | "groove"
  | "ridge"
  | "inset"
  | "outset";

// Type of Shadows & Elevations
export type Shadow<T extends BoxShadowValues | TextShadowValues> =
  | ShadowContraction
  | T extends BoxShadowValues
  ? BoxShadowValues
  : TextShadowValues;

export type ShadowContraction = string;
export interface ShadowValues {
  inset?: "inset";
  offsetX: string | number;
  offsetY: string | number;
  blurRadius?: string | number;
  spreadRadius?: string | number;
  color?: Color;
}
export type BoxShadowValues = ShadowValues;
export type TextShadowValues = Omit<ShadowValues, "spreadRadius" | "inset">;

export type ShadowVariant = "inset" | "none";

export type Elevation = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
export type Elevations = {
  [K in Elevation]?: Shadow<BoxShadowValues> | "none";
};
export type ZIndex =
  | "background" // -100
  | "base" // 0
  | "header" // 100
  | "overlay" // 200
  | "modal" // 400
  | "alert" // 800
  | "tooltip"; // 1600
export type ZIndexes = {
  [K in ZIndex]?: number;
};

// Type of Gradients

// Type of States
export type State = "hover" | "focus" | "active" | "disabled";
export type States = {
  [K in State]?: string;
};

// Type of Breakpoints
export type SemanticSizeUnit = "xs" | "sm" | "md" | "lg" | "xl" | "xxl";
export type Breakpoints = {
  [K in SemanticSizeUnit]?: number;
};
