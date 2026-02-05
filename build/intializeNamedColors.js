import { existsSync, readFileSync } from "node:fs";
import { Color } from "./Color.js";
import { hexToColor } from "./internal/hexToColor.js";
import { getNamedColors } from "./namedColors.js";
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
