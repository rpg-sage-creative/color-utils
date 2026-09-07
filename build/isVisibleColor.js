import { toColorData } from "./internal/toColorData.js";
/** Returns true if the given color is valid and has no alpha or an alpha greater than 0. */
export function isVisibleColor(color) {
    if (!color)
        return false; // NOSONAR
    const colorData = toColorData(color);
    if (!colorData)
        return false; // NOSONAR
    return colorData.alpha === undefined || colorData.alpha > 0;
}
