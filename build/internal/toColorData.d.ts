import type { Optional } from "@rsc-utils/type-utils";
import type { ColorData, ColorString } from "../ColorData.js";
/** Converts any given values to Hex and then to a Color object */
export declare function toColorData(color: Optional<string>): ColorData | undefined;
export declare function toColorData(color: ColorString, alpha: number): ColorData;
export declare function toColorData(red: number, green: number, blue: number): ColorData;
export declare function toColorData(red: number, green: number, blue: number, alpha: number): ColorData;
