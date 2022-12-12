// Type of Sizes
export type Size = string | number;
export type SizeUnit =
  | "px"
  | "%"
  | "rem"
  | "em"
  | "vh"
  | "vw"
  | "vmin"
  | "vmax";

export interface SizeWithUnit {
  size: Size;
  unit: SizeUnit;
}
export type SizeVariant = "font" | "border" | "spacing" | "form";
export type SizeIndex = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
export type SemanticSizeIndex =
  | "xxs"
  | "xs"
  | "sm"
  | "md"
  | "lg"
  | "xl"
  | "xxl";

export const sizes = {
  font: {
    0: {
      size: 0.875, //14
      unit: "rem",
    },
    1: {
      size: 1, //16
      unit: "rem",
    },
    2: {
      size: 1.125, //18
      unit: "rem",
    },
    3: {
      size: 1.5, //24
      unit: "rem",
    },
    4: {
      size: 1.75, //28
      unit: "rem",
    },
    5: {
      size: 2, //32
      unit: "rem",
    },
    6: {
      size: 2.5, //40
      unit: "rem",
    },
    7: {
      size: 3, //48
      unit: "rem",
    },
    8: {
      size: 4, //64
      unit: "rem",
    },
    9: {
      size: 5.5, //88
      unit: "rem",
    },
  },
  border: { 0: "1px", 1: "2px", 2: "4px" },
  spacing: {
    0: "2px",
    1: "4px",
    2: "8px",
    3: "10px",
    4: "16px",
    5: "20px",
    6: "24px",
    7: "32px",
    8: "48px",
    9: "64px",
  },
  form: {
    sm: "64px",
    md: "128px",
    lg: "256px",
    xl: "460px",
  },
};

export const breakpoints = {
  xs: 475,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
  xxl: 1440,
};

export type Sizes = typeof sizes;
export type Breakpoints = typeof breakpoints;
