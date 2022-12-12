import tColor from "tinycolor2";
import { ColorHSLA } from "./tokens/color";
import { ShadowValues } from "./tokens/depth";
import { SizeUnit } from "./tokens/size";

export const getHsla = ({ h, s, l, a }: ColorHSLA) => {
  const colorObj = tColor({ h, s: s / 100, l: l / 100 });
  if (!colorObj.isValid()) throw Error(errorMsg.color.invalidColorObj);
  if (a) {
    if (a > 1 || a <= 0) {
      throw Error(errorMsg.color.invalidAlphaRange);
    } else {
      colorObj.setAlpha(a);
    }
  }
  return colorObj.toHslString();
};

export const setAlphaToHsla = (color: string, a: number) => {
  const colorObj = tColor(color);
  if (!colorObj.isValid()) throw Error(errorMsg.color.invalidColorObj);
  if (a > 1 || a <= 0) throw Error(errorMsg.color.invalidAlphaRange);
  colorObj.setAlpha(a);
  return colorObj.toHslString();
};

export const getShadowString = (shadowObj: ShadowValues) => {
  const { inset, offsetX, offsetY, blurRadius, spreadRadius, color } =
    shadowObj;
  const shadowString = `${inset ? "inset " : ""}${getSizeWithUnit(
    offsetX,
    "px"
  )} ${getSizeWithUnit(offsetY)} ${getSizeWithUnit(
    blurRadius
  )} ${getSizeWithUnit(spreadRadius)} ${color}`;
  return shadowString;
};

export const getSizeWithUnit = (size?: string | number, unit?: SizeUnit) => {
  if (size === undefined) return "";
  if (!unit) return `${size}`;
  return `${size}${unit}`;
};

export const errorMsg = {
  color: {
    invalidColorObj: "Please set a right color format",
    invalidAlphaRange: "Must be in range 0 to 1",
  },
};

export default {
  color: {
    getHsla,
    setAlphaToHsla,
  },
  depth: {
    getShadowString,
  },
  size: {
    getSizeWithUnit,
  },
};
