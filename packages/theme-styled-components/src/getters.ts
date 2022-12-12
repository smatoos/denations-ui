// getters.ts

import {
  Colors,
  ColorScale,
  KnownColorVariant,
  MinColorScale,
  MinColorVariant,
  MonoColorVariant,
} from "@denations/design-token/lib/tokens/color";
import defaultTheme, { ThemeProps } from "./theme";

// utility function to fallback to `defaultTheme` when necessary
function getTheme(props: ThemeProps) {
  return props.theme && props.theme.colors ? props.theme : defaultTheme;
}

export function getColor(
  type: KnownColorVariant,
  index: ColorScale,
  props: ThemeProps
) {
  const colors = getTheme(props).colors.dark;
}
