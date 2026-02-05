import type { Optional } from "@rsc-utils/type-utils";
import type { HexColorString } from "./ColorData.js";
/** Tests for HEX or HEXA */
export declare function isHexColorString(color: Optional<string>): color is HexColorString;
/** Tests explicitly for HEXA (WITH alpha) */
export declare function isHexColorString(color: Optional<string>, withAlpha: true): color is HexColorString;
/** Tests explicitly for HEX (WITHOUT alpha) */
export declare function isHexColorString(color: Optional<string>, withAlpha: false): color is HexColorString;
