import type { ColorToken, KnownColorGroup } from "./types";
declare type ColorValue = [
    Token: ColorToken,
    Group: KnownColorGroup,
    Lightness: number
];
export declare function parseColorToken(token: string): ColorValue;
export {};
