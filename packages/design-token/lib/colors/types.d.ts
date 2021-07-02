declare const knownColorGroupNames: readonly ["white", "black", "gray", "blueBlack", "primary", "yellow", "blue", "green", "red"];
export declare type KnownColorGroup = typeof knownColorGroupNames[number];
export declare function isKnownColorGroup(str: string): str is KnownColorGroup;
declare type MakeTokenSet<TGroup extends KnownColorGroup, TLightness extends number[]> = `$${TGroup}${TLightness[number]}`;
export declare type ColorToken = "$white" | "$black" | MakeTokenSet<"gray", [50, 100, 200, 300, 400, 500, 600, 700, 800, 900]> | MakeTokenSet<"blueBlack", [50, 100, 200, 300, 400, 500, 600, 700, 800, 900]> | MakeTokenSet<"primary", [50, 100, 200, 300, 400, 500, 600, 700, 800, 900]> | MakeTokenSet<"yellow", [50, 500, 800]> | MakeTokenSet<"green", [50, 500, 800]> | MakeTokenSet<"red", [50, 500, 800]> | MakeTokenSet<"blue", [50, 500, 800]>;
export declare type ColorScheme = Record<ColorToken, string>;
export declare type SemanticColorScheme = {
    background: ColorToken | string;
};
export declare type SemanticColorKey = keyof SemanticColorScheme;
export declare type ColorTheme = {
    scheme: ColorScheme;
    semanticScheme: SemanticColorScheme;
};
export {};
