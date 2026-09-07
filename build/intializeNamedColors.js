import { existsSync, readFileSync } from "node:fs";
import { Color } from "./Color.js";
import { hexToColor } from "./internal/hexToColor.js";
import { getNamedColors } from "./namedColors.js";
/**
 * Loads the named colors used by this repo.
 * By only initializing the data when needed, we can avoid wasted memory when apps don't need it.
 * The number of colors added is returned.
 */
export function intializeNamedColors(filePath) {
    const namedColors = getNamedColors();
    if (namedColors.size) {
        return 0;
    }
    let rawJson;
    try {
        const paths = [
            filePath,
            `./node_modules/@rsc-utils/color-utils/data/namedColors.json`,
            `../node_modules/@rsc-utils/color-utils/data/namedColors.json`
        ];
        for (const path of paths) {
            if (path && existsSync(path)) {
                rawJson = readFileSync(path).toString();
                break;
            }
        }
    }
    catch (ex) {
        // ignore
    }
    const simpleColors = rawJson ? JSON.parse(rawJson) : [];
    simpleColors.forEach((simpleColor) => {
        const colorCore = hexToColor(simpleColor.hex);
        colorCore.names.push(simpleColor.name);
        const lower = simpleColor.name.toLowerCase();
        const color = new Color(colorCore);
        if (!namedColors.has(colorCore.hexa)) {
            namedColors.set(colorCore.hexa, color);
        }
        namedColors.set(lower, color);
    });
    return namedColors.size;
}
