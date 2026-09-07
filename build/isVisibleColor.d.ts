import type { Optional } from "@rsc-utils/type-utils";
import type { HexColorString, RgbaColorString, RgbColorString } from "./ColorData.js";
type ColorString = HexColorString | RgbColorString | RgbaColorString;
/** Returns true if the given color is valid and has no alpha or an alpha greater than 0. */
export declare function isVisibleColor(color: Optional<ColorString>): color is ColorString;
export {};
