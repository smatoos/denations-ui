const knownColorGroupNames = [
  "white",
  "black",
  "gray",
  "blueBlack",
  "primary",
  "yellow",
  "blue",
  "green",
  "red",
] as const;
export type KnownColorGroup = typeof knownColorGroupNames[number];
export function isKnownColorGroup(str: string): str is KnownColorGroup {
  return knownColorGroupNames.includes(str as KnownColorGroup);
}

type MakeTokenSet<
  TGroup extends KnownColorGroup,
  TLightness extends number[]
> = `$${TGroup}${TLightness[number]}`;

export type ColorToken =
  | "$white"
  | "$black"
  | MakeTokenSet<"gray", [50, 100, 200, 300, 400, 500, 600, 700, 800, 900]>
  | MakeTokenSet<"blueBlack", [50, 100, 200, 300, 400, 500, 600, 700, 800, 900]>
  | MakeTokenSet<"primary", [50, 100, 200, 300, 400, 500, 600, 700, 800, 900]>
  | MakeTokenSet<"yellow", [50, 500, 800]>
  | MakeTokenSet<"green", [50, 500, 800]>
  | MakeTokenSet<"red", [50, 500, 800]>
  | MakeTokenSet<"blue", [50, 500, 800]>;

export type ColorScheme = Record<ColorToken, string>;

export type SemanticColorScheme = {
  background: ColorToken | string;
};

export type SemanticColorKey = keyof SemanticColorScheme;
export type ColorTheme = {
  scheme: ColorScheme;
  semanticScheme: SemanticColorScheme;
};
