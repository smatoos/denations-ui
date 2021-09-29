import { ColorScale, ColorVariant } from "@denations/design-token/lib/types";
import defaultTheme, { ThemeProps } from "./theme";

export function getTheme(props: ThemeProps) {
  return props.theme && props.theme.colors ? props.theme : defaultTheme;
}

export function getColor(
  variant: ColorVariant,
  scale: ColorScale,
  props: ThemeProps
) {
  const { colors } = getTheme(props);
  if (colors.primary) {
    colors.primary[10];
  }
}
