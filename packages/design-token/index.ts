import { color } from "./tokens/color";
import { size } from "./tokens/size";
import { font } from "./tokens/font";
export declare type Color = typeof color;
export declare type Font = typeof font;
export declare type Size = typeof size;
export { color, size, font };
export interface DesignToken {
    color: Color;
    font: Font;
    size: Size;
}
declare const designToken: DesignToken;
export default designToken;
