import type { ColorTheme } from "./types";

export const light: Readonly<ColorTheme> = Object.freeze({
  scheme: {
    $white: "#fff",
    $black: "#000",

    // Gray
    $gray50: "#eaedf3",
    $gray100: "#ccd2dd",
    $gray200: "#adb5c3",
    $gray300: "#8d97aa",
    $gray400: "#768197",
    $gray500: "#5f6d85",
    $gray600: "#525f74",
    $gray700: "#414c5e",
    $gray800: "#323a49",
    $gray900: "#202632",
    // Blue black
    $blueBlack50: "#70737e",
    $blueBlack100: "#595c68",
    $blueBlack200: "#414553",
    $blueBlack300: "#292e3d",
    $blueBlack400: "#121728",
    $blueBlack500: "#101424",
    $blueBlack600: "#0e1220",
    $blueBlack700: "#0c101c",
    $blueBlack800: "#0a0d18",
    $blueBlack900: "#090b14",

    // Primary
    $primary50: "#d8fff7",
    $primary100: "#9affe8",
    $primary200: "#00ffd9",
    $primary300: "#00f9c7",
    $primary400: "#00f0b8",
    $primary500: "#00e7ab",
    $primary600: "#00d79b",
    $primary700: "#00c388",
    $primary800: "#00b278",
    $primary900: "#009257",

    // Alert, Warn
    $yellow50: "#fff8df",
    $yellow500: "#ffc700",
    $yellow800: "#ff8a00",

    // Success
    $green50: "#e7f7eb",
    $green500: "#2bbd5f",
    $green800: "#01893d",

    // Error
    $red50: "#ffe5ea",
    $red500: "#ff4b6c",
    $red800: "#c21e4d",

    // Additional, Link
    $blue50: "#e2f2ff",
    $blue500: "#0094fe",
    $blue800: "#0d62ca",
  },
  semanticScheme: {
    background: "$blueBlack700",
  },
});

export const dark: Readonly<ColorTheme> = Object.freeze({
  ...light,
});
