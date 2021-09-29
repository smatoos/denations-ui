import { Breakpoints, SizeTheme } from "../types";

export const sizes: SizeTheme = {
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

export const breakpoints: Breakpoints = {
  xs: 475,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
  xxl: 1440,
};
