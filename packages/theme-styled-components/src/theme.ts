import { color, font, size, depth } from "@denations/design-token";

const theme = {
  colors: {
    ...color.colors,
  },
  ...size,
  ...depth,
  ...font,
};

export type Theme = typeof theme;
export type ThemeProps = { theme?: Theme };

export default theme;
